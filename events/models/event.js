var mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    event_name: {
        type: String, 
        required: true
    }, 
    event_description: {
        type: String, 
        required: true
    },
    event_date: {
        type: String, 
        required: true
    },
    event_venue: {
        type: String, 
        required: true
    }
});

var event = module.exports = mongoose.model('event', EventSchema);