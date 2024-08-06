const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 50000;


app.use(cors());

// Function to get population data from restcountries.com
const getPopulationData = async () => {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    const populationData = {};
    data.forEach(country => {
        populationData[country.name.common] = country.population;
    });
    return populationData;
};

// Function to fetch and parse medal data
const fetchMedalData = async () => {
    const { data } = await axios.get('https://en.wikipedia.org/wiki/2024_Summer_Olympics_medal_table');
    const $ = cheerio.load(data);

    const medalData = [];
    let lastRank = null;
    let rowSpan = 0;

    const firstTable = $('table.wikitable').first();
    const rows = firstTable.find('tbody tr');

    rows.each((index, element) => {
        if (index === 0 || index === rows.length - 1) return; // Skip the header row and the last row

        const tds = $(element).find('td');
        const ths = $(element).find('th');

        let rank, country, gold, silver, bronze, total, flagUrl;

        // Check if the rank cell uses rowspan
        if ($(tds[0]).attr('rowspan')) {
            rowSpan = parseInt($(tds[0]).attr('rowspan'), 10);
            lastRank = $(tds[0]).text().trim();
            rank = lastRank;
        } else if (rowSpan > 0) {
            rank = lastRank;
            rowSpan--;
        } else {
            rank = $(tds[0]).text().trim();
        }

        // Extract data based on the presence of rowspan
        if (tds.length === 5) {
            country = $(ths[0]).text().trim();
            flagUrl = $(ths[0]).find('img').attr('src');
            gold = $(tds[1]).text().trim();
            silver = $(tds[2]).text().trim();
            bronze = $(tds[3]).text().trim();
            total = $(tds[4]).text().trim();
        } else {
            country = $(ths[0]).text().trim();
            flagUrl = $(ths[0]).find('img').attr('src');
            gold = $(tds[0]).text().trim();
            silver = $(tds[1]).text().trim();
            bronze = $(tds[2]).text().trim();
            total = $(tds[3]).text().trim();
        }

        // Remove asterisk at the end of the country name if present
        if (country.endsWith('*')) {
            country = country.slice(0, -1).trim();
        }

        if (rank && country) {
            medalData.push({ rank, country, gold, silver, bronze, total, flagUrl });
        }
    });

    return medalData;
};

// Function to normalize medal counts based on population
const normalizeMedals = (medalCount, population, scale = 1e6) => {
    return ((medalCount / population) * scale).toFixed(2);
};

// Endpoint to get standard medal table
app.get('/api/medals', async (req, res) => {
    try {
        const medalData = await fetchMedalData();
        res.json(medalData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching medal data');
    }
});

// Endpoint to get population-adjusted medal table
app.get('/api/medals/adjusted', async (req, res) => {
    try {
        const medalData = await fetchMedalData();
        const populationData = await getPopulationData();

        const adjustedMedalData = medalData
            .filter(countryData => populationData[countryData.country]) // Exclude countries without population data
            .map(countryData => {
                const population = populationData[countryData.country];
                return {
                    ...countryData,
                    gold: normalizeMedals(countryData.gold, population),
                    silver: normalizeMedals(countryData.silver, population),
                    bronze: normalizeMedals(countryData.bronze, population),
                    total: normalizeMedals(countryData.total, population),
                };
            });

        // Sort by gold adjusted medals
        adjustedMedalData.sort((a, b) => b.gold - a.gold);

        // Assign new ranks
        adjustedMedalData.forEach((countryData, index) => {
            countryData.rank = (index + 1).toString();
        });

        res.json(adjustedMedalData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching adjusted medal data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});