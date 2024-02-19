const exampleBlogEntries = [
{ _id: '1', title: "First Blog Post" },
{ _id: '2', title: "Second Blog Post" },
{ _id: '3', title: "Third Blog Post" }
];

// Controller for the Blog List page
exports.blogList = function (req, res) {
 res.render('blogList', { title: 'Blog List', blogEntries: exampleBlogEntries })
};

// Controller for the Blog Edit page
exports.blogEdit = function (req, res) {
 const blogId = req.params.id;
 res.render('blogEdit', { title: 'Edit Blog', blogId });
};

// Controller for the Blog Delete page
exports.blogDelete = function (req, res) {
 const blogId = req.params.id;
 res.render('blogDelete', { title: 'Delete Blog', blogId });
};

// Controller for the Blog Add page
exports.blogAdd = (req, res) => {
 res.render('blogAdd', { title: 'Add Blog' });
};
