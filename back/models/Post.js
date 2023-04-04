const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        min: 10,
        max: 100,
    },
    photo: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);