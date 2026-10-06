require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');

const connectDB = require('./config/db'); // Import database connection function
const User = require('./models/User'); // Import the Mongoose User Model

const app = express();
app.use(cors());
app.use(express.json());

// Serve the frontend static files (HTML, CSS, JS) directly from the server
app.use(express.static(path.join(__dirname, '../frontend')));

// Initialize database with demo accounts if empty
const initDB = async () => {
    try {
        const count = await User.countDocuments();
        if (count === 0) {
            const saltRounds = 10;
            
            // Hash demo password "123456"
            const hash = await bcrypt.hash('123456', saltRounds);
            
            // Insert demo users into MongoDB
            await User.insertMany([
                { email: 'admin@cabflow.com', passwordHash: hash, role: 'admin', name: 'Admin' },
                { email: 'vendor@cabflow.com', passwordHash: hash, role: 'vendor', name: 'ABC Travels' },
                { email: 'driver@cabflow.com', passwordHash: hash, role: 'driver', name: 'Rahul' },
                { email: 'employee@cabflow.com', passwordHash: hash, role: 'employee', name: 'Kunal' }
            ]);
            
            console.log('✅ MongoDB initialized with demo accounts.');
        } else {
            console.log('ℹ️ MongoDB already contains users, skipping initialization.');
        }
    } catch (err) {
        console.error('❌ Error initializing database:', err.message);
    }
};

// Centralized authentication endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ success: false, error: 'Please provide email, password, and role.' });
        }

        const user = await User.findOne({ email, role });

        if (!user) {
            return res.status(401).json({ success: false, error: 'Invalid email, password, or role.' });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Invalid email, password, or role.' });
        }

        res.json({
            success: true,
            user: {
                email: user.email,
                role: user.role,
                name: user.name
            }
        });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ success: false, error: 'Internal server error.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectDB();
    await initDB();
    
    console.log(`🚀 CabFlow running! Open your browser to: http://localhost:${PORT}`);
});
