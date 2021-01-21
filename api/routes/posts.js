const router = require("express").Router();

router.get("/+post/+:id(\\d+)", (req, res) => {
    res.send("Show post by post id: " + req.params.id);
});

router.get("/+posts", (req, res) => {
    res.send("Show all posts");
});

router.post("/+post/+create", (req, res) => {
    res.send("Creating a post");
});

router.put("/+post/+edit/+:id(\\d+)", (req, res) => {
    res.send("Update the post by id: " + req.params.id);
});

router.delete("/+post/+drop/+:id(\\d+)", (req, res) => {
    res.send("Delete a post by post id: " + req.params.id);
});

module.exports = router;