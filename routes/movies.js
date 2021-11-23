const router = require("express").Router();
const Movies = require('../models/Movies');

// get all movies
router.get("/movies", async(req, res) => {
    try {
        const movies = await Movies.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get movie with id

router.get("/:id", async (req, res) =>{
    try {
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;