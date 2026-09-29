# Hoocar

Hoocar is a learning project for a peer-to-peer car rental marketplace in India. This repository began as a static landing-page prototype. The existing design is preserved in `client/` and now runs with Vite and React. The booking, authentication, payment, verification and host features shown in the mockup are **not implemented**. Car listings and trust figures in the prototype are sample content, not real marketplace data.

## Stack

- Frontend: React + Vite
- API: Node.js + Express
- Database (for future features): MongoDB + Mongoose. A MongoDB connection is optional for the hello-world API.

## Run locally

Install Node.js (18 or later) and npm. From the repo root, open two terminals:

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Check `http://localhost:5000/api/hello` for `{ "message": "Hello from Hoocar API" }`. The Vite dev server proxies `/api` to the Express API at port 5000. For MongoDB work, run MongoDB locally or use Atlas and set `MONGODB_URI` in `server/.env`. Never commit real credentials.

To build the frontend, run `cd client && npm run build`. There is no production deployment setup yet.

## Structure

```text
client/             Existing landing page, converted to a React/Vite app
  src/App.jsx       Existing interface and sample car data
  src/styles.css    Existing styles
  src/main.jsx      React entry point
server/             Express API; optional MongoDB connection
  src/index.js      Hello-world endpoint and startup
  .env.example      Local environment template
```

## Learning roadmap

Build and test one small slice at a time. The GitHub issues will track: API/data setup, authentication, car listings, search and filters, bookings with date checks, a WhatsApp booking path, payments in test mode, owner dashboard, and deployment. The WhatsApp work starts with click-to-chat for a selected car and dates; a later WhatsApp Business Cloud API webhook could create booking requests once account access, consent, verification, and security are set up. Sending a chat is not a confirmed reservation. Do not accept real bookings or payments until those flows, security, policies, and legal requirements have been reviewed. Replace mock listings, trust figures, and placeholder actions as real features are built.
