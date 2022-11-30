const { User, Thought } = require("../models");

const thoughtController = {
    getThoughts(req, res) {
        // use find() on Thought model
    },

    getSingleThought(res, req) {
        // use findOne() 
    },

    createThought(req, res) {
        // use create()
    },

    updateThought(req, res) {
        // use findOneAndUpdate()
    },

    deleteThought(req, res) {
        // use findOneAndRemove()
    },

    addReaction(req, res) {
        // use findOneAndUpdate and $addToSet
    }, 

    removeReaction(req, res) {
        // findOneAndUpdate using $pull
    },
};

module.exports = thoughtController;