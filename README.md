# 888 Casino Platform Simulation Backend

This is a Node.js + TypeScript backend API for a casino application, providing endpoints for casino games, promotions, and news. The API is designed to be used with a React/Vite frontend.

## Features

- REST API for casino content: games, promotions, and news.
- TypeScript for type safety.
- CORS enabled for frontend integration.
- Ready for Jest testing.
- Dummy casino data included for development purposes.

---

## Tech Stack

- Node.js
- TypeScript
- Express
- CORS
- Jest (for testing)

---

## Project Structure

backend/
├─ src/
│ ├─ data/
│ │ └─ casinoContent.ts # Dummy data for games, promotions, and news
│ ├─ index.ts # Express server entry point
│ └─ types/
│ └─ types.ts # Type definitions
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md

## Installation

Clone the repository:

git clone https://github.com/noasg/888test_backend.git
cd 888test_backend

npm install

npm run dev

open http://localhost:5000/
Should see this: Casino API is working
also http://localhost:5000/api/content - should display the json 
