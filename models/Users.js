// import mongoose from "@db/connection";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Schema Def
const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  address : {
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
        }, location :
        {
          type :{
            type :String,
            default : "Point"
          },
          coOrdinates:{
  
            type : [Number],
            index : "2dsphere"
          }
        }
  }

},{ strict : true })


const User = mongoose.model("users", UserSchema,"users");
export default User;