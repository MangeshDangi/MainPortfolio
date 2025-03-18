const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
