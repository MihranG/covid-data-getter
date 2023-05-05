import express from 'express';
import fetch from 'node-fetch';
import moment from 'moment';
import cors from 'cors';

const app = express();
app.use(cors())

const baseUrl = 'https://api.covidtracking.com/v2/us/daily.json';

app.get('/:month', async (req, res) => {
    const { month } = req.params;
    console.log('---------month-------',month)

    // Parse the month parameter and get the start and end dates
    const startDate = moment(`${month}-01`, 'YYYYMMDD');
    const endDate = moment(`${month}-01`, 'YYYYMMDD').endOf('month');

    // Fetch data from the API
    const response = await fetch(baseUrl);
    const data = await response.json();

    // Filter the data by the requested month
    const filteredData = data.data.filter((entry,idx) => {
        const entryDate = moment(entry.date, 'YYYY-MM-DD');
        if(idx<5){
            console.log(22223333333, entryDate, startDate,entry )
        }
        return entryDate >= startDate && entryDate <= endDate;
    });

    res.json(filteredData.length ? filteredData : [data.data[0]] );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
