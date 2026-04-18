# Photo Sharing Server

Backend Lab 2 skeleton rebuilt from the provided CodeSandbox sample.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with:

   ```env
   DB_URL=<your-mongodb-atlas-connection-string>
   PORT=8081
   ```

3. Load the sample data:

   ```bash
   npm run db:load
   ```

4. Start the API server:

   ```bash
   npm start
   ```

## Implemented lab endpoints

- `GET /user/list`
- `GET /user/:id`
- `GET /photosOfUser/:id`
