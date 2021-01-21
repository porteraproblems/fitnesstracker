const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please choose cardio or resistance"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;