import express from "express";
import dotenv from "dotenv";
import { logger } from "./utils/logger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
