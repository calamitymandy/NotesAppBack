const { Router } = require("express")
const router = Router();

const { getAllNotes, createNote, deleteNote, updateNote, getNote } = require("../controllers/noteController");

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNote).delete(deleteNote).put(updateNote);

module.exports = router;