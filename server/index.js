import express from "express";
import cors from "cors";
import covidRoute from "./covid/covidRoute.js";

const app = express();
app.use(cors());
app.use("/covid", covidRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
