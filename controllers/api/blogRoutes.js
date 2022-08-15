const router = require('express').Router();
const { Blog } = require('../../models');


router.get('/', async(req, res) => {
    try{
        const blogs = Blog.findAll();
        res.json(blogs)
    }catch (err){
        res.status(400).json(err)
    }
})


module.exports = router;