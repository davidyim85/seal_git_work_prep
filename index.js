require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {//;adf
    res.send('hello world this is b!!')//;adf
});//test

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`));

