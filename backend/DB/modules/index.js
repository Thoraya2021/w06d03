

const mongoose=require("mongoose")
const dotenv = require('dotenv')

dotenv.config();

const options ={

};
mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`,options)
.then(()=>{
console.log("DB connected");
})

