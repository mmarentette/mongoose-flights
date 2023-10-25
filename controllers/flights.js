const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    try {
        const flightDocs = await Flight.find({});
        // console.log('flightDocs', flightDocs);
        res.render('flights/index', {
            flights: flightDocs,
            title: 'All Flights'
        });

    } catch(err) {
        res.send(err);
    }
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight'
    })
}

async function create(req, res) {
    console.log(req.body, '<---------------- req.body');
    try {
        const flightDoc = await Flight.create(req.body);
        // console.log(flightDoc, '<----------- flightDoc')
        res.redirect('/flights')
    } catch {
        res.send(error);
    }
}

async function show(req, res) {
    try {
        // console.log(req.params.id, '<-------------- req.params.id');
        const flightDoc = await Flight.findById(req.params.id);
        const ticketDocs = await Ticket.find({flight: flightDoc._id});
        console.log(ticketDocs, '<------------');
        // console.log(flightDoc);
        res.render('flights/show', {
            title: 'Flight Details',
            flight: flightDoc,
            tickets: ticketDocs
        });
    } catch (error) {
        res.send(error);  
    }
}