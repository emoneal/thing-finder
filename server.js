const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

// Middleware (every request) //
app.use(express.json())

// Routes //
app.use("/inv", require("./routes/invRouter.js"))


// Server Listen //

app.listen(9000, () => {
    console.log ("The server is running on Port 9000")
})
