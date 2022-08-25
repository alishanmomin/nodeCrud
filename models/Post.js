const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const postSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", postSchema);
