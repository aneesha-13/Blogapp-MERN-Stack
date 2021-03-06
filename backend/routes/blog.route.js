let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Blog Model
let blogSchema = require('../models/blog');

// CREATE Blog
router.route('/create-blog').post((req, res, next) => {
  console.log('in create');
  blogSchema.create(req.body, (error, data) => {
    if (error) {
        console.log('errreate')
    //   return next(error)
    } else {
      console.log(data)
    //   console.log("create")
      res.json(data)
    }
  })
});
// READ Blog
router.route('/').get((req, res) => {
  blogSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// READ Blog by id
router.route('/:id').get((req, res) => {
  blogSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Blog
router.route('/edit-blog/:id').get((req, res) => {
  blogSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Blog
router.route('/update-blog/:id').put((req, res, next) => {
  blogSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Blog updated successfully !')
    }
  })
})
// Delete Blog
router.route('/delete-blog/:id').delete((req, res, next) => {
  blogSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;