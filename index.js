require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world dev');
});

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`));

