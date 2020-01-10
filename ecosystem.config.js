require('dotenv').config()
module.exports = {
    apps : [{
      name        : "search",
      script      : "./dist/server.js",
      watch       : true,
      env : {
        PORT : 3004,
        MONGO_URL : process.env.MONGO_URL
   }}]
  }
