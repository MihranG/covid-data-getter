
const MAX_DATE = '2021-03-07'
const MIN_DATE = '2020-04-21'
const validateData = (req, res, next) => {
    const { d: dateStr } = req.query;
    console.log(444, dateStr, req.query)

    const dateRegex = /\d{2}-\d{2}-\d{4}/;
    if (!dateRegex.test(dateStr)) {
        return res.status(400).json({ error: 'Invalid date format. Please use the format DD-MM-YYYY.' });
    }

    const parts = dateStr.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);
    const startDate = new Date(MIN_DATE);
    const endDate = new Date(MAX_DATE);
    console.log(date.getTime())

    if (isNaN(date.getTime()) || date < startDate || date > endDate) {
        return res.status(400).json({ error: 'Invalid date. Date should be between 21 April 2020 and 07 March 2021.' });
    }

    // Date is valid, proceed to the next middleware or route handler
    next();
}

export default validateData
