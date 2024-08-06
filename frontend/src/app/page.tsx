"use client";

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Tabs, Tab} from "@nextui-org/tabs";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Accordion,
    AccordionItem
} from "@nextui-org/react";
import Image from 'next/image';

interface MedalData {
    rank: string;
    country: string;
    gold: number | string;
    silver: number | string;
    bronze: number | string;
    total: number | string;
    flagUrl: string;
}

const Home: React.FC = () => {
    const [medalData, setMedalData] = useState<MedalData[]>([]);
    const [adjustedMedalData, setAdjustedMedalData] = useState<MedalData[]>([]);
    const [activeTab, setActiveTab] = useState('standard');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [standardResponse, adjustedResponse] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/medals`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/medals/adjusted`)
                ]);
                setMedalData(standardResponse.data);
                setAdjustedMedalData(adjustedResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderTable = (data: MedalData[]) => (
        <Table aria-label="Olympic Medal Table" css={{minWidth: "100%"}}>
            <TableHeader>
                <TableColumn>Rank</TableColumn>
                <TableColumn>Country</TableColumn>
                <TableColumn>Gold</TableColumn>
                <TableColumn>Silver</TableColumn>
                <TableColumn>Bronze</TableColumn>
                <TableColumn>Total</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.rank}</TableCell>
                        <TableCell>
                            <div style={{display: "flex", alignItems: "center"}}>
                                {row.flagUrl && <img src={`https:${row.flagUrl}`} alt={`${row.country} flag`}
                                                     style={{marginRight: "8px"}}/>}
                                {row.country}
                            </div>
                        </TableCell>
                        <TableCell>{row.gold}</TableCell>
                        <TableCell>{row.silver}</TableCell>
                        <TableCell>{row.bronze}</TableCell>
                        <TableCell>{row.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">2024 Summer Olympics Medal Table</h1>
            <Tabs value={activeTab}>
                <Tab value="standard" title="Standard Medal Table">
                    {renderTable(medalData)}
                </Tab>
                <Tab value="adjusted" title="Adjusted Medal Table">
                    <Accordion>
                        <AccordionItem key="1" aria-label="Explanation" title="Explanation">
                            The &quot;Adjusted Medal Table&quot; offers a unique perspective on the Olympic medal
                            standings by normalizing the medal counts based on the population of each country. This
                            adjustment allows for a fairer comparison of the athletic achievements of countries with
                            vastly different population sizes. By calculating the number of medals per million
                            inhabitants, the table highlights the relative success of smaller nations that might
                            otherwise be overshadowed by more populous countries. This adjusted ranking provides
                            valuable insights into the efficiency and effectiveness of each country&apos;s sports
                            programs and the prowess of their athletes on the world stage.
                        </AccordionItem>
                    </Accordion>

                    {renderTable(adjustedMedalData)}
                </Tab>
            </Tabs>
            <div style={{position: 'absolute', top: 0, right: 0, padding: '10px'}}>
                <a href="https://en.wikipedia.org/wiki/2024_Summer_Olympics_medal_table" target="_blank"
                   rel="noopener noreferrer">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
                        alt="Wikipedia"
                        width={50}
                        height={50}
                    />
                    <p style={{fontSize: '12px', textAlign: 'center'}}>Based on Wikipedia data</p>
                </a>
            </div>
        </div>
    );
};

export default Home;