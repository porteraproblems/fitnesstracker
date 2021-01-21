const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({body}, res) => {
    db.workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    db.workout.findByIdAndUpdate ({_id: params.id}, {$push: {exercises: body}}).then(dbworkout => {
        res.json(dbworkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req,res) => {
    db.workout.find({}).then(dbworkout => {
        res.json(dbworkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req,res) => {
    db.workout.find({}).sort({ date: -1}).limit(7).then(dbworkout => {
        res.json(dbworkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router; 