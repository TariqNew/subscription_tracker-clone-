import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const PORT = parseInt(process.env.PORT || "3000", 10);
const NODE_ENV = process.env.NODE_ENV || "development";

const databaseUrl = process.env.DATABASE_URL;
const secrete_key = process.env.JWT_SECRETE;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is required in environment variables");
}

if (!secrete_key) {
  throw new Error("DATABASE_URL is required in environment variables");
}

const DATABASE_URL = databaseUrl;

const SECRETE_KEY = secrete_key;

export { PORT, NODE_ENV, DATABASE_URL, SECRETE_KEY };
