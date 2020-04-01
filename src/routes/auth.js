const express = require('express');
const router = express.Router();
const names = require('../names');
const uuidv4 = require('uuid').v4;

const getName = () => {
    return names[Math.floor(Math.random() * Math.floor(names.length))];
};


router.post('/signin', (req, res) => {
    const request = req.body;
    const name = getName();
    const role = request.isAdmin ? "Admin" : "user";
    res.json({token: uuidv4(), firstName: name.firstName, lastName: name.lastName, role})
});

module.exports = router;