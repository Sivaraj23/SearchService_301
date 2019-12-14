import mongoose from "@db/connection";
import ORDER_STATUS from "../config/contants";
import postHook from "../routes/orders/services/postHook";
import preHook from "../routes/orders/services/preHook";
var uniqid = require('uniqid');


const Schema = mongoose.Schema;

//Schema Def
const OrderSchema = new Schema({

    orderId: {
        type: Number,
        unique: true,
        default: ()=>
        {
            return Date.now()
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurants",
        required: true
    },
    orderItems: [{
        foodItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "foodItems",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    lastModifiedTime: {
        type: Date,
        default: Date.now()
    },
    orderStatus: {
        type: String,
        required: true,
        default: ORDER_STATUS.ORDERED
    },
    totalPrice :{
        type: Number
    }
}, { strict: true })

OrderSchema.pre('save',preHook)
OrderSchema.post('save', postHook)


const Order = mongoose.model("orders", OrderSchema);
export default Order;