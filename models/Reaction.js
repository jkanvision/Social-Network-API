const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            mazLength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // getter to format time
            get: timestamp => dateFormat(timestamp),
        },
    },

    {
        toJSON: {
            getters: true
        },
        id: false
    },
);

module.exports = reactionSchema;