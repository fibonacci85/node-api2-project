// implement your posts router here

const Posts = require("./posts-model")
const express = require("express")
const router = express.Router();

//ENDPOINTS

router.get('/api/posts', (req, res) => {
    Posts.find()
    .then( posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
})



module.exports = router;