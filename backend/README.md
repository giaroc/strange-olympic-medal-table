# Olympic Medal Table Backend

This project is the backend part of the Olympic Medal Table application, which provides APIs to fetch both the standard and population-adjusted medal tables for the 2024 Summer Olympics. The backend is built using Node.js, Express, and Cheerio for web scraping.

## Features

- Fetch standard Olympic medal table data.
- Fetch population-adjusted Olympic medal table data.
- Scrape data from Wikipedia.
- Normalize medal counts based on country population.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Cheerio](https://cheerio.js.org/)
- [Cors](https://github.com/expressjs/cors)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/giaroc/strange-olympic-medal-table.git
   cd strange-olympic-medal-table/backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root of the `backend` directory and add any necessary environment variables. For this project, you might not need any specific environment variables, but you can configure the following if necessary:

```env
PORT=5000
```

### Running the Server

To start the server, run:

```bash
npm start
# or
yarn start
```

The server will be running on [http://localhost:5000](http://localhost:5000).

### API Endpoints

The backend provides the following API endpoints:

- `GET /api/medals`: Retrieves the standard Olympic medal table data.
- `GET /api/medals/adjusted`: Retrieves the population-adjusted Olympic medal table data.

### Data Source

The data for the Olympic medal tables is sourced from Wikipedia. Specifically, the medal data is scraped from the [2024 Summer Olympics medal table](https://en.wikipedia.org/wiki/2024_Summer_Olympics_medal_table) page. This ensures that the information displayed is accurate and up-to-date based on the latest publicly available data.

### Project Structure

```plaintext
backend/
├── node_modules/           # Node.js modules
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── server.js               # Main server file
└── README.md               # Project documentation
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more information.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Cheerio](https://cheerio.js.org/)
- [Cors](https://github.com/expressjs/cors)
