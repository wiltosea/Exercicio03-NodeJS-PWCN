import { Mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
	author: {
		type: String,
	},
	comments: [{ body: String }],
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
