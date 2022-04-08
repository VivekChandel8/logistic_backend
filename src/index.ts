import express, { Request, Response } from "express";
import connects from "./config/db";
import { router } from "./routes/routes";
import bodyParser from "body-parser";
import { PORT } from "./config/common";
import cors from "cors";
import upsTrack from "./config/upsTracking";
import cron from "node-cron"
import { upsCronJob } from "./controllers/cron";

const app = express();

// parsing raw json
app.use(bodyParser.json());

// parsing x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// enable cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use("/logistic", router);

cron.schedule('00 59 * * * *', () => {
  console.log('running a task every minute');
  upsCronJob()
});



connects();

app.listen(PORT, (): void => {
  console.log(`Server is running on ${PORT}`);
});
