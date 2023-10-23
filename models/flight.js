const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: [10, 'Flight Number must be at least 10'],
        max: [9999, 'Flight Number must be at most 9999']
    },
    departs: {
        type: Date
        // Assign a default date! Possibly in EJS...
    }
});

module.exports = mongoose.model('Flight', flightSchema);