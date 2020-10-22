const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) =>{
    res.render('index.html', { webTitle: "Home"});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { webTitle: "Contact"});
});

module.exports = router;