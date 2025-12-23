require("dotenv").config()  
const express = require('express')
const connection = require('./connections/connection')
const {
    createComplaint,
    getComplaint,
    getComplaintById,
    updateComplaint,
    deleteComplaint
} = require("./controllers/complaintController")

const app = express()
connection()
app.use(express.json())

app.post("/api/complaints", createComplaint)
app.get("/api/complaints", getComplaint)
app.get("/api/complaints/:id", getComplaintById)
app.put("/api/complaints/:id", updateComplaint)
app.delete("/api/complaints/:id", deleteComplaint)

app.listen(3000, function(){
    console.log("Server has started at port 3000")
})

