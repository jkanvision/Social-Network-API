const { User, Thought } = require("../models");

const userController = {
    getUsers(req, res) {
        // add find() on User model
    },

    getSingleUser(req, res) {
        //  add findOne() on User model
        // use .populate to pop friends and thoughts for that User
        // ex: .populate("friends")
    },

    createUser(req, res) {
        // add create for User
    },

    updateUser(req, res) {
        // findOneAndUpdate method
    },
    
    deleteUser(req, res) {
        // findOneAndDelete method
        // BONUS: delete associated thoughts
    },

    addFriend(req, res) {
        // findOneAndUpdate using $addToSet
    },

    removeFriend(req, res) {
        // findOneAndUpdate using $pull
    }
};

module.exports = userController;