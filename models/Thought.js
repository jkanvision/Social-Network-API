const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            reuired: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter to format time
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    },
);

// virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;