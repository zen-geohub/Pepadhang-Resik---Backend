const express = require('express')
const dataRoutes = require('./src/data/routes')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3099

app.use(cors())

app.use('/api/v1/backendReklame', dataRoutes)

app.listen(port, () => { console.log(`Server listen to port ${port}`) })