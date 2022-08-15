const router = require('express').Router();
const {User, Blog}= require("../models")


router.get("/", (req,res) => {
    Blog.findAll().then(data=>{
        const hbsData = data.map(blog=>blog.toJSON())
        res.render("home", {blogs: hbsData})
    })
})


module.exports = router;