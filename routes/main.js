__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/users/login', (req, res) => {

    res.sendFile(__path + '/views/login.html')

})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})
router.get('/api/game2', (req, res) => {
    res.sendFile(__path + '/index.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
