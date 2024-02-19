var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blog');
var homeController = require('../controllers/home');

/* GET home page. */
router.get('/', homeController.homePage);

/* GET blogList page. */
router.get('/blogList', blogController.blogList);

/* GET blogEdit page. */
router.get('/blogEdit/:blogId', blogController.blogEdit);

/* GET blogDelete page */
router.get('/blogDelete/:blogId', blogController.blogDelete);

/* GET blogAdd page. */                        
router.get('/blogAdd', blogController.blogAdd);

module.exports = router;
