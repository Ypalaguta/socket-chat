const express = require('express');
const router = express.Router();
const {uniqueNamesGenerator, adjectives, colors, animals} = require('unique-names-generator');

/* GET home page. */
router.post('/login', function (req, res, next) {
    let currentName = '';
    while (!currentName || !!global.users.find(user => user.nickname === currentName)) {
        currentName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
            length: 2
        });
    }
    res.json({nickname: currentName, userId: ++global.lastId}).end();
});

module.exports = router;
