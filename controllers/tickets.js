const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    const flightId = req.params.id;
    // console.log(flightId, '<--------- flightId');
    res.render('tickets/new', {
        title: 'Add Ticket',
        flightId
    });
}

async function create(req, res) {
    try {
        const flightId = req.params.id;
        const ticketDoc = await Ticket.create(req.body);
        ticketDoc.flight = flightId;
        await ticketDoc.save();
        console.log(ticketDoc);
        res.redirect(`/flights/${flightId}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}