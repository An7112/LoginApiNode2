const express = require('express');
const User = require('../models/users');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const user = new User({
        MobileNumber: req.body.MobileNumber,
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/:userId', async (req, res) => {
    // console.log(req.params.postId);
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err })
    }
});
//update
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.userId }, { $set: req.body});
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;