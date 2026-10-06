const mongoose = require('mongoose');

// Define the Schema (Structure of the document in the database)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'vendor', 'driver', 'employee'], // Only these roles are allowed
        required: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create and export the Model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
