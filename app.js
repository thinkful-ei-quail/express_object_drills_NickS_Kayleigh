const express = require('express');
const morgan = require('morgan');
const playStore = require('./playStore');
const app = express();
app.use(morgan("dev"));
console.log("potatoes")

app.get('/apps',(req,res) => {
    const list = [...playStore];
    console.log(list)
    // const { sort,genres } = req.query;
    res.status(200).send(list);
})

app.listen(8000, () => {
    console.log('Serverstarted on PORT 8000,YAY!!');
});