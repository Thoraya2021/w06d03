

const mongoose=require("mongoose")
const { boolean } = require("webidl-conversions")
const todoschema=new mongoose.Schema({
name:{type:String,required:true},
isDelete:{type:boolean,default:false},
isCompele:{type :boolean,default:false}

});

const todoModel =mongoose.model("Todo",todoschema);
module.exports=todoModel;
