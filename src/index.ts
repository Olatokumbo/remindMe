import express, { Request, Response } from "express";
import serverlessHttp from "serverless-http";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Serverless API is UP" });
});

module.exports.handler = serverlessHttp(app);
