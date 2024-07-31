// src/app.js
const express = require('express')
const cors = require('cors')
const filesRoutes = require('./routes/filesRoutes')

const app = express()

app.use(cors())

app.use('/files', filesRoutes)

module.exports = app
