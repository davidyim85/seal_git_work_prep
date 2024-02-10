require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world this is b');
});

app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`));

