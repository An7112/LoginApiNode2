const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Name:{
        type: String
    },
    Email:{
        type: String,
        require:true
    },
    Password: {
        type: String,
        require: true
    },
    MobileNumber:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {
    collection:"User"
});

module.exports = mongoose.model('Users', PostSchema);