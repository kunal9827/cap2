const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory mock database that can be replaced by MongoDB later
const usersDB = [];

// Initialize database with hashed passwords for demo accounts
const initDB = async () => {
    const saltRounds = 10;
    
    // Hash demo password "123456" for all users
    const adminHash = await bcrypt.hash('123456', saltRounds);
    const vendorHash = await bcrypt.hash('123456', saltRounds);
    const driverHash = await bcrypt.hash('123456', saltRounds);
    const employeeHash = await bcrypt.hash('123456', saltRounds);

    usersDB.push({ email: 'admin@cabflow.com', passwordHash: adminHash, role: 'admin', name: 'Admin' });
    usersDB.push({ email: 'vendor@cabflow.com', passwordHash: vendorHash, role: 'vendor', name: 'ABC Travels' });
    usersDB.push({ email: 'driver@cabflow.com', passwordHash: driverHash, role: 'driver', name: 'Rahul' });
    usersDB.push({ email: 'employee@cabflow.com', passwordHash: employeeHash, role: 'employee', name: 'Kunal' });
    
    console.log('Mock database initialized with hashed credentials.');
};

// Centralized authentication endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Validation for missing fields
        if (!email || !password || !role) {
            return res.status(400).json({ success: false, error: 'Please provide email, password, and role.' });
        }

        // Find user by email and role
        const user = usersDB.find(u => u.email === email && u.role === role);

        if (!user) {
            // Invalid email or role mismatch
            return res.status(401).json({ success: false, error: 'Invalid email, password, or role.' });
        }

        // Verify password using bcrypt
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            // Invalid password
            return res.status(401).json({ success: false, error: 'Invalid email, password, or role.' });
        }

        // Success: Return user info WITHOUT the password hash
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
    await initDB();
    console.log(`CabFlow authentication backend running on http://localhost:${PORT}`);
});
