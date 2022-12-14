const { User, Thought } = require("../models");

const userController = {
    getUsers(req, res) {
       User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate("friends")
          .populate("thoughts")
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user found with that id" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
        
    },

    createUser(req, res) {
        User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res.status(404).json({ message: "No user with this id" })
                : res.json(user)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    },
    
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
              !user
                ? res.status(404).json({ message: "No user found with that id" })
                // BONUS: delete associated thoughts
                : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: "User and thoughts deleted" }))
          .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res
                    .status(404)
                    .json({ message: "No user found with that id" })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res
                    .status(404)
                    .json({ message: "No user found with that id" })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};

module.exports = userController;