import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const baseUrl = "https://api.covidtracking.com/v2/us/daily.json";

app.get("/covid", async (req, res) => {
  const { d } = req.query;
  const dateReversed = d.split("-").reverse().join("-");
  // todo add validation to check whether data is correct and between min and max values
  const response = await fetch(baseUrl);
  const data = await response.json();

  // Filter the data by the requested month
  const foundData = data.data.find((entry, idx) => {
    // Mimicking date response on demand
    return entry.date === dateReversed;
  });

  res.json(foundData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
