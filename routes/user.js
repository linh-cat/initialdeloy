const { User } = require("../models/user")
const express = require("express")
const router = express.Router()


router.get("/all", async (req, res) => {
    const user = await User.find();
    res.send(user)
})


module.exports = router