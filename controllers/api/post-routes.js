const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'entry_text',
            'created_at'
        ],
        include: [
            { 
                model: User,
                attributes: ['username'] 
            }
        ]
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'entry_text',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post entry found with this id!' });
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create post
router.post('/', (req, res) => {

});

// update post
router.put('/:id', (req, res) => {

});

// delete post
router.delete('/:id', (req, res) => {

});

module.exports = router;