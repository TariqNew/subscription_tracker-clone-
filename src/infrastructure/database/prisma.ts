import { DATABASE_URL } from "../../config/env.js";
import { PrismaClient } from "@prisma/client";

if (!DATABASE_URL) {
  throw new Error("Please! provide the database url");
}

export const prisma = new PrismaClient();
