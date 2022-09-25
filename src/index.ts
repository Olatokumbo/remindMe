import express, { Request, Response } from "express";
import serverlessHttp from "serverless-http";
import bodyParser from "body-parser";
import { generateEmail } from "./services/email";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const list = ["Read Your Bible", "Read a Book", "Tidy your Room", "20 Mins Meditation"];

app.get("/", async (_req: Request, res: Response) => {
  await generateEmail(list);
  res.status(200).json({ message: "Email Sent..." });
});

module.exports.handler = serverlessHttp(app);
