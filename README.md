# PostgreSQL Dynamic Table Viewer

A web application that allows users to dynamically view and explore PostgreSQL database tables. Built with React for the frontend and Node.js/Express for the backend.

## Features

- Dynamic table viewing from PostgreSQL database
- Real-time table data fetching
- Clean and responsive user interface
- Centralized configuration management
- Error handling and user feedback

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

## Project Structure

```
pg-dynamic-viewer/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main application component
│   │   └── config.js      # Frontend configuration
├── server/                 # Express backend
│   ├── index.js           # Server implementation
│   └── package.json       # Server dependencies
├── config.js              # Central configuration file
└── package.json           # Root package.json
```

## Configuration

The application uses a centralized configuration system. The main configuration file (`config.js`) contains:

- Server settings (port, host)
- Database connection details
- Schema configuration

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pg-dynamic-viewer
   ```

2. Install dependencies:
   ```bash
   npm run setup
   ```

3. Configure the database:
   - Ensure PostgreSQL is running
   - Create a database named 'test'
   - Create a schema named 'employees'
   - Update database credentials in `config.js` if needed

4. Start the application:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a table name in the input field
3. Click "Göster" (Show) to view the table contents
4. The table data will be displayed in a formatted table view

## Error Handling

The application includes comprehensive error handling:
- Invalid table names
- Database connection issues
- Server errors
- Network errors

Errors are displayed to the user in a clear and informative manner.

## Development

- Frontend runs on port 3000
- Backend runs on port 4000
- API endpoint: `http://localhost:4000/table/:tableName`

## Security Considerations

- Input validation for table names
- SQL injection prevention
- CORS enabled for development
- Error messages sanitized for production

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details. 