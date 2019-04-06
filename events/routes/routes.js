const express= require('express');
const router = express.Router();

const event = require('../models/event.js')

//retriev eventse
router.get('/events', function(req, res, next) {
    event.find(function(err, events){
        res.json(events)
    })
});

//add event
router.post('/event', function(req, res, next) {

    let newEvent = new event({
        event_name: req.body.event_name,
        event_venue: req.body.event_venue,
        event_date: req.body.event_date,
        event_description: req.body.event_description
    });
    newEvent.save((err, event)=> {
        if(err) {
            res.json({msg : 'Failed to add event', err});
        } else {
            res.json({msg : "Added event"});
        }
    });
});

//delete event
router.delete('/event', function(req, res, next) {
    event.deleteOne({event_name: req.params.event_name}, function(err, result){
        if(err) {
            res.json(err);
        } else {
            res.json(result);

        }
    });
});

module.exports = router