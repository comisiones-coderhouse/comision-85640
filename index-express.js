const express = require("express")

const app = express()

app.get("/", () => {
    console.log("Hola ke ase?")
})

app.listen(3000, () => {
    console.log("Levanto perri")
})