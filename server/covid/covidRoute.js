import validateData from "../validators.js";
import fetch from "node-fetch";
import express from "express";

const router = express.Router();

router.use(validateData);
const baseUrl = "https://api.covidtracking.com/v2/us/daily.json";

router.get("/", async (req, res) => {
  const { d } = req.query;
  const dateReversed = d.split("-").reverse().join("-");

  const response = await fetch(baseUrl);
  const data = await response.json();

  // Filter the data by the requested month
  const foundData = data.data.find((entry, idx) => {
    // Mimicking date response on demand
    return entry.date === dateReversed;
  });

  res.json(foundData);
});
export default router;
