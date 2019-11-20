const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true},
        title: String,
        finished: Boolean
    }
)

module.exports = mongoose.model("Todo", todoSchema);