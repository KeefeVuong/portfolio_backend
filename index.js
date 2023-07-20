import { projects } from "./database.js"

const express = require('express');
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/projects', (req, res) => {
    res.json(projects)
})

app.listen(port, () => console.log(`Portfolio API running on port ${port}!`));

module.exports = app;