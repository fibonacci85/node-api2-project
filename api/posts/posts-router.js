// implement your posts router here

const Posts = require("./posts-model")
const express = require("express")
const router = express.Router();

//ENDPOINTS


//GET   /api/posts/  Returns an array of all the post objects contained in the database
router.get('/', (req, res) => {
    Posts.find()
    .then( posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
})
//GET	/api/posts/:id	Returns the post object with the specified id
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post)
        }else{
            res.status(404).json()
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "error retrieving post"})
    })
})
//POST	/api/posts	Creates a post using the information sent inside the request body and returns the newly created post object
router.post('/', (req, res) => {
    const {title, contents} = req.body
    Posts.insert(req.body)
    .then(add => {
        if(!title || !contents) {
            res.status(400.json({message:"please provide title/content"}))
        }else{
            res.status(201).json(add) 
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message:'error adding the post'
        })
    })
})
//^^^^^^^^^^^^^^^not sure about this ^^^^^^^^^^///


//PUT	/api/posts/:id	Updates the post with the specified id using data from the request body and returns the modified document, not the original

//DELETE	/api/posts/:id	Removes the post with the specified id and returns the deleted post object

//GET	/api/posts/:id/comments	Returns an array of all the comment objects associated with the post with the specified id



module.exports = router;