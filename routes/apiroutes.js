const router = require("express").Router();
const db = require("../models");

//Get existing workout data
router.get("/api/workouts", (req, res) => {
    console.log("api GET workouts running");
    db.workout.find({})
        .sort({ date: 1 })
        .populate("exercises")
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Create a new workout session
router.post("/api/workouts", ({ body }, res) => {
    console.log("api POST workouts running");
    console.log(body);
    db.workout.create({body})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Add exercise data to a workout
router.put("/api/workouts/:id", (req, res) => {
    console.log("api PUT workouts running");
    console.log(req.params);
    db.Exercise.create(req.body)
        .then(({ _id }) => db.workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: _id }, $inc: {totalDuration: req.body.duration}}, { new: true }))
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


//Gets stats for all workouts for charting
router.get("/api/workouts/range", (req, res) => {
    console.log("api GET range running");
    db.workout.find({})
        .sort({ date: 1 }) 
        .populate("exercises") 
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


module.exports = router;