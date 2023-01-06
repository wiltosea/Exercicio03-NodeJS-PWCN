import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";
export const Comments = {
	findAllByProduct(id) {
		return db(TABLE_NAME).select("*").where("post_id", id);
	},
	findOne(id) {
		return db(TABLE_NAME).where("id", id).select();
	},
	insert(id, author, comment) {
		return db(TABLE_NAME).insert({
			post_id: id,
			author,
			comment,
		});
	},
};
