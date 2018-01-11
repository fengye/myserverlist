const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => [
  {
  	"name" : "Wellington",
  	"ipaddr" : "12.34.56.78",
  	"port" : "7788"
  }])
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))