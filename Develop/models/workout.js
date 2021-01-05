const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Select Resistance or Cardio"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name required"
        },
        duration: {
            type: Number,
            required: "Enter excerise duration time"
        },
        weight: {
            type: Number,
            required: "Weight required"
        },
        reps: {
            type: Number,
            required: "Number of reps required"
        },
        set: {
            type: Number,
            required: "Number of sets required"
        },
        distance: {
            type: Number,
            required: "Distance required"
        },
    }]
}, {
    toJSON: {
        virtuals: true,
    },
});

workoutSchema.virtual('totalDuration').get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout; 