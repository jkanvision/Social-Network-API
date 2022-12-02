const router = require("express").Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

router.route("/")
  .get(getThoughts)
  .post(createThought);

  router.route("/:userId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route("/:userId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;