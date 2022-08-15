const router = require('express').Router();
const {User, Blog}= require("../models")

router.get("/", async(req, res) => {
    try{
        const users = User.findAll();
        res.json(users)
    }catch (err){
        res.status(400).json(err)
    }
})


module.exports = router;