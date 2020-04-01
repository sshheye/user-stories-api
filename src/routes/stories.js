const express = require('express');
const router = express.Router();
const stories = require('../stories');
const random = require('../number_helper').random;
const roles = require('../constants').roles;

function isAdmin(req) {
    return req.user.role === roles.admin;
}

function isUser(req) {
    return req.user.role === roles.user;
}

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const storyById = stories.find(story => story.id === id);
    if (!storyById) {
        return res.sendStatus(404);
    }
    if (isAdmin(req)) {
        return res.json(storyById)
    }
    if (isUser(req)) {
        if(storyById.createdBy === req.user.id)
            return res.json(storyById);
    }
    res.sendStatus(400);
});

router.get("/", (req, res) => {
    if (isAdmin(req)) {
        return res.json(stories);
    }
    if (isUser(req)) {
        return res.json(stories.filter(story => story.createdBy === req.user.id));
    }
    res.sendStatus(400);
});

module.exports = router;