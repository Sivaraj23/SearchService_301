module.exports = {
    apps : [{
      name        : "www",
      script      : "./dist/server.js",
      watch       : true
      
    },{
      name       : "cluster",
      script     : "./dist/server.js",
      watch:true, 
      instances  : 4,
      exec_mode  : "cluster"
    }]
  }