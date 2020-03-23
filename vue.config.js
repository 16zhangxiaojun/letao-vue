module.exports = {
    devServer : {
        proxy : {
            '/api3': {
                target:'https://way.jd.com',
                changeOrigin : true,
                pathRewrite:{
                    '^/api3':''
                }
            },
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin : true
            },
          
        }
    }
}