const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        },

        email: {
            type: String,
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                }
            },
            required: [true, "Email required"],
            unique: true,
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual for friendCount
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model("User", userSchema);

module.exports = User;