const mongoose = require("mongoose")


async function connectToDb(){
   await mongoose.connect("mongodb+srv://Arpana:zxcvbnm1@cluster0.gaahd6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Database connected")
}

module.exports = connectToDb