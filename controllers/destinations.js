const Flight = require('../models/flight');

module.exports = {
    create
}

async function create(req, res) {
    try {
        const flightDoc = await Flight.findById(req.params.id);
        console.log(flightDoc);
        console.log(req.body);
        flightDoc.destinations.push(req.body);
        await flightDoc.save();
        res.redirect(`/flights/${flightDoc._id}`);
    } catch (error) {
        res.send(error);
    }
}