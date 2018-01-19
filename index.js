const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send([
		{
			"name": "SEA07",
			"ipaddr": "10.30.10.107",
			"port": "17788"
		}
  	]))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
