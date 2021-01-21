const router = require("express").Router();

router.get("/login", (req, res) => {
    res.send("Login form");
});

router.get("/logout", (req, res) => {
    res.send("Logout form");
});

router.get("/auth", (req, res) => {
    res.send("Register form");
});



module.exports = router;