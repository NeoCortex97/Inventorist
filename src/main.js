require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "page")));

app.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, "..", "page", "index.html"));
});

app.listen(process.env.appPort, () => {
    console.info(`InventoryManager ist listening on port "${process.env.appPort}"!`);
});