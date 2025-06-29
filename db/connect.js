require("dotenv").config();
const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)

// mongoose.connect("mongodb://localhost:27017/movie" )
        . then(()=>console.log("hihi"));
//  mongodb+srv://pawangoswami6823:561vqgL21Blig7gx@cluster0.2iyapkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

