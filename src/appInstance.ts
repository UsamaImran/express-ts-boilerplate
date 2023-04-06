import express, { Application, Router, json } from "express";

import cookieParser from "cookie-parser";

const APP: Application = express();
APP.use(cookieParser());
APP.use(json());
const ROUTER = Router();

export { APP, ROUTER };
