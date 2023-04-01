import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import morgan from 'morgan'
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/tcc-easyer/api/v1/", routes)


export { app }