// server/api/server.ts
import { defineEventHandler } from "h3";
import * as path from "path";
import * as fs from "fs";

export default defineEventHandler(async (event) => {
  const filePath = path.resolve(process.cwd(), "data", "provinces.json"); // Sesuaikan path
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading provinces.json:", error);
    event.node.res.statusCode = 500;
    return { error: "Failed to load data" };
  }
});
