const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
        default: 'SAN'
    },
    flightNo: {
        type: Number,
        min: [10, 'Flight Number must be at least 10'],
        max: [9999, 'Flight Number must be at most 9999']
    },
    departs: {
        type: Date,
        default: Date.now + (365 * 24 * 60 * 60 * 1000) // Need to research this more
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);