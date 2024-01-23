import express from "express";
import cors from "cors";
import {config} from "dotenv";
import {dbconnection} from "./db/connection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
config();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRouter);

dbconnection();

app.use(errorMiddleware);



export default app;