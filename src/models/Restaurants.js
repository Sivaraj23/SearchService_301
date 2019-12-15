import mongoose from "../db/connection";


const Schema = mongoose.Schema;

//Schema Def
const RestaurantSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  contactNumber : {
    type: String,
    required: true,
    unique : true
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  budgetPerPerson:{
      type : Number,
      default : 0
  },
  cuisine: {
    type: String,
    required:true
},
  menuItems : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodItems"
  }],
    addressLine1:{
        type: String
    },
    addressLine2:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String,
        required :true
    },
    pincode:{
        type: String,
        required : true
    },
    country:{
        type: String,
        required :true
    },
    location :
      {
        type :{
          type :String,
          default : "Point"
        },
        coordinates:{

          type : [Number],
          index : "2dsphere"
        }
      }
     , 
    rating :{
      type: Number,
      required:true,
      default:0
    }

},{ strict : true })


const Restaurant = mongoose.model("restaurants", RestaurantSchema);
export default Restaurant;