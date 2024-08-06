
# Olympic Medal Table Frontend

This project is the frontend part of the Olympic Medal Table application, which displays both the standard and population-adjusted medal tables for the 2024 Summer Olympics. The frontend is built using Next.js and integrates with a backend API to fetch the medal data.

## Features

- Display standard Olympic medal table.
- Display population-adjusted Olympic medal table.
- Sorting functionality for the medal tables.
- Responsive design using NextUI components.
- Explanation section for the adjusted medal table.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NextUI](https://nextui.org/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/olympic-medal-table.git
   cd olympic-medal-table/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root of the `frontend` directory and add the following environment variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Replace `http://localhost:5000` with the URL of your backend API if it's different.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `.next` directory.

### Starting the Production Server

After building the application, you can start the production server with:

```bash
npm start
# or
yarn start
```

### Deployment

This project is ready to be deployed to Vercel. Follow these steps to deploy:

1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your Git repository into Vercel.
4. Set the environment variables in the Vercel dashboard (Settings > Environment Variables).
5. Deploy the project.

## Project Structure

```plaintext
frontend/
├── public/                # Static assets
├── src/                   # Source files
│   ├── app/               # Main application files
│   │   ├── page.tsx       # Main page component
│   │   └── ...            # Other components and pages
├── .env.local             # Environment variables
├── .gitignore             # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
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

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NextUI](https://nextui.org/)
- [Axios](https://axios-http.com/)

## Data Source

The data for the Olympic medal tables is sourced from Wikipedia. Specifically, the medal data is scraped from the 2024 Summer Olympics medal table page. This ensures that the information displayed is accurate and up-to-date based on the latest publicly available data.

- [2024 Summer Olympics medal table page] (https://en.wikipedia.org/wiki/2024_Summer_Olympics_medal_table)