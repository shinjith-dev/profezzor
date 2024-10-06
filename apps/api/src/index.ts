import express, { Express, Request, Response } from "express";
import logger from "./utils/logger";
import { PORT } from "./lib/config";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  logger.server(`Server is running at http://localhost:${PORT}`);
});
