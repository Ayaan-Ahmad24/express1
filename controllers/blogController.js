const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
    try {
        const { title, content, cover_image_url } = req.body;
        const blog = await Blog.create({ title, content, cover_image_url });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the blog.' });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching blogs.' });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ error: 'Blog not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the blog.' });
    }
};
