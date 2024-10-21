// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // For serving static files

// Load existing contacts
let contacts = [];
if (fs.existsSync('./data/contacts.json')) {
    contacts = JSON.parse(fs.readFileSync('./data/contacts.json'));
}

// Define routes
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = { name, email, phone, subject, message, id: contacts.length + 1 };
    contacts.push(newContact);

    // Save contacts to file
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));

    res.status(201).json({ message: 'Contact saved successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
