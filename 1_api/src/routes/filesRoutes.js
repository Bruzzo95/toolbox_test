const express = require('express')
const { getFilesData, newGetFilesList } = require('../controllers/filesController')
const router = express.Router()

router.get('/data', getFilesData)
router.get('/list', newGetFilesList)

module.exports = router
