import mongoose from "mongoose";
require('dotenv').config()

const MDB = `mongodb://${
  process.env.MONGO_URL
}`;
mongoose
  .connect(MDB, {
    useCreateIndex: true, 
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to DB!"))
  .catch(err => console.log(err));
  var db = mongoose.connection;
db.once('open', function() {
  console.log("Connection Test  :  pass")
});
 export default mongoose;