import mongoose from "../db/connection";


const Schema = mongoose.Schema;

//Schema Def
const FoodItemSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
 price :{
     type : String,
     required : true,
     default : "0"
 },
 rating : {
     type : String,
     required : true,
     default: "0"
 }
},{ strict : true })


const FoodItem = mongoose.model("foodItems", FoodItemSchema);
export default FoodItem;