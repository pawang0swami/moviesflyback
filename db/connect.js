const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://pawangoswami6823:<db_password>@cluster0.5hmwwol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb://localhost:27017/movie" )
        . then(()=>console.log("hihi"));