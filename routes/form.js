var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	res.render("form", { title: "Adicione" });
});

/* POST users listing. */
router.post("/", (req, res) => {
	users.items.push(req.body);
	res.send("pronto");
});

router.delete("/", (req, res) => {
	users.items.push(req.body);
	res.send("ok!");
});

router.post("/");

module.exports = router;
