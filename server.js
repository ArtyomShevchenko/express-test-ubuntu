const express = require("express")
const app = express()
const PORT = 3000

app.route("/")
    .get((req, res, next) => {
        res.send("I a`m response from server.js")
        console.log("Someone enter in server")
        next()
    })


app.listen(PORT, () => console.log("Server run on port:" + PORT))