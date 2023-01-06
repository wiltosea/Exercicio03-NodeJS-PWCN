import express from "express";
const router = express.Router();
import { ProductsService } from "../services/Products.js";
import { Comments } from "../services/Comment.js";
import knex from "knex";

router.get("/", function (_, res) {
	ProductsService.findAll().then(function (products) {
		res.render("index", { products });
	});
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const product = await ProductsService.findOne(id);
	const comments = await Comments.findAllByProduct(id);

	res.render("produto", { product, comments });
});

router.post("/:id/comments", async (req, res) => {
	const id = req.params.id;
	const author = req.body.author;
	const comment = req.body.comment;

	await Comments.insert(id, author, comment);
	res.redirect(`/products/${id}`);
});

router.delete("/:id", function (req, res) {
	const { id } = req.params;
	ProductsService.delete(id).then(() => {
		res.json({
			success: "Produto removido com sucesso!",
		});
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	ProductsService.insert(body).then((product) => {
		res.json(product);
	});
});

router.put("/", function (req, res) {
	const { body } = req;
	ProductsService.update(body).then((product) => {
		res.json(product);
	});
});

export default router;
