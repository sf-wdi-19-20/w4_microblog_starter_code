var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author'
	},
	text: String,
	comments: [CommentSchema]
});

var Post = mongoose.model('Post', PostSchema);


var AuthorSchema = new Schema({
	name: String
});

var Author = mongoose.model('Author', AuthorSchema);


var CommentSchema = new Schema({
	text: String,
	timestamp: {
				type : Date, 
				default: Date.now 
			}
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports.Post = Post;
module.exports.Comment = Comment;
module.exports.Author = Author;

