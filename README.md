
# Olympic Medal Table with Population Adjustment

This project aims to create a Next.js application that displays an Olympic medal table. The unique aspect of this project is that it allows users to view the medal table adjusted for the population of each country. The application scrapes data from the Wikipedia page for the 2024 Summer Olympics medal table and processes it to show both the standard medal count and the population-adjusted medal count.

## Features

- Scrape medal data from the Wikipedia page.
- Display the standard medal table with ranks, country names, gold, silver, bronze, and total medals.
- Calculate and display a population-adjusted medal table.
- Responsive design for mobile and desktop views.

## Technologies

- Frontend: Next.js, Axios
- Backend: Node.js, Express, Cheerio
- Scraping: Axios, Cheerio

## How to Run

1. Clone the repository.
2. Install dependencies for both the backend and frontend.
3. Start the backend server.
4. Start the frontend development server.
5. Open the application in your browser.

```bash
git clone https://github.com/giaroc/strange-olympic-medal-table.git
cd strange-olympic-medal-table

# Install backend dependencies
cd backend
npm install

# Start backend server
node server.js

# Install frontend dependencies
cd ../frontend
npm install

# Start frontend development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.


## API Documentation

The API exposes the following endpoint:

- `GET /api/medals`: Retrieves the Olympic medal table data.

## Project Structure

```
olympic-medal-table/
│
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── server.js
│   ├── ... (other backend files)
│
├── frontend/
│   ├── node_modules/
│   ├── pages/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   ├── ... (other frontend files)
│
├── .gitignore
├── README.md
```

## License

This project is licensed under the MIT License.
