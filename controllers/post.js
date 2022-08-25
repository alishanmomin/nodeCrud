const Post = require("../models/Post");

exports.createPost = async (req, res) =>
{
    const body = req.body;
    body.userId = req.user.id;
    const newPost = new Post(req.body);

    if (!body)
    {
        return res.json({
            status: "failed",
            message: "Please Submit All Fields",
        });
    }
    newPost.save().then((result) =>
    {
        return res.json({
            status: "success",
            message: "postCreated",
            Data: result,
        });
    })
        .catch((error) =>
        {
            return res.json({
                status: "failed",
                message: "there was an error creating the post",
                error: error,
            });
        });
};

exports.getAllPost = async (req, res) =>
{
    const post = await Post.find({})
    if (post)
    {
        return res.json({
            status: "success",
            message: "getPost",
            Data: post,
        });
    }
};

exports.deletePost = async (req, res) =>
{
    const post = await Post.findById(req.body.id)
    if (!post)
    {
        return res.json({
            status: "success",
            message: "Cannot delete Post"
        });
    } else
    {
        post.remove()
        return res.json({
            status: "success",
            message: "Post Deleted!"
        });
    }
};
