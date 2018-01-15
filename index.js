const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send([
		{
			"name": "WLG Windows",
			"ipaddr": "10.20.10.182",
			"port": "17788"
		}
  	]))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
