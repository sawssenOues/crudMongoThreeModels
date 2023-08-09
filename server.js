const express = require('express');
const app = express();
const studentRoute = require('./Routers/studentRouter')


app.use(express.json())

app.use(express.urlencoded({extended:true}))



app.use('/',studentRoute)

const port = 3000;
app.listen(port, () => {
    console.log(`App running on Port ${port}`);
});

