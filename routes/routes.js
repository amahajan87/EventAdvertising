const express= require('express');
const router = express.Router();

//const Event = require('../models/event')

// Get list of events
router.get('/events', (req, res) => {
    res.send("get list")
});

// Add Event 
router.post('/event', (req, res) => {
    res.send("post event")
});

// Delete Event
router.delete('event', (req, res)=> {
    res.send("delete event")
});

module.exports = router