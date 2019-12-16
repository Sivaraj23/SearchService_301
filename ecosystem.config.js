module.exports = {
    apps : [{
      name        : "www",
      script      : "./dist/server.js",
      watch       : true,
      env : {
        PORT : 3004
      }
    },{
      name       : "cluster",
      script     : "./dist/server.js",
      watch:true, 
      instances  : 4,
      exec_mode  : "cluster",
      env :{
        PORT : 3005
      }
    }]
  }