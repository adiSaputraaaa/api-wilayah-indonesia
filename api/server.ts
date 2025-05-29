import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.resolve("./api", "provinces.json");
  const fileData = fs.readFileSync(filePath, "utf8");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.status(200).end(fileData);
}
