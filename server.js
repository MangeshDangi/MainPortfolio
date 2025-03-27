const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');
const Order = require('./models/Order');
require('dotenv').config();

// Verify environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'MONGODB_URI'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars);
    process.exit(1);
}

const app = express();

// Middleware
app.use(cors({
    origin: true, // Allow all origins
    credentials: true, // Allow credentials
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use(express.static('public'));

// Test route with detailed error handling
app.get('/api/test', (req, res) => {
    try {
        res.json({ status: 'success', message: 'Server is running!' });
    } catch (error) {
        console.error('Test route error:', error);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));


// Create email transporter with verification
let transporter;
try {
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS // Use the app password here
        }
    });

    // Verify transporter
    transporter.verify((error, success) => {
        if (error) {
            console.error('Transporter verification failed:', error);
        } else {
            console.log('Server is ready to send emails');
        }
    });
} catch (error) {
    console.error('Failed to create email transporter:', error);
}

// Updated contact form endpoint
app.post('/api/contact/submit', async (req, res) => {
    console.log('Received contact form submission:', req.body);
    
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields are required'
            });
        }

        // Save to database
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });
        await newContact.save();

        // Send email
        if (transporter) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Portfolio Contact: ${subject}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(200).json({
            status: 'success',
            message: 'Message sent and saved successfully!'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to process message',
            error: error.message
        });
    }
});

// Add a route to get all messages (protected)
app.get('/api/contact/messages', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch messages',
            error: error.message
        });
    }
});

// Add order submission route
app.post('/api/orders/submit', async (req, res) => {
    try {
        const { name, email, requirements, budget, serviceId, serviceName } = req.body;

        // Validate input
        if (!name || !email || !requirements || !budget || !serviceId || !serviceName) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields are required'
            });
        }

        // Save order to database
        const newOrder = new Order({
            name,
            email,
            requirements,
            budget,
            serviceId,
            serviceName
        });
        await newOrder.save();

        // Send email notification
        if (transporter) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Order: ${serviceName}`,
                html: `
                    <h2>New Service Order</h2>
                    <p><strong>Service:</strong> ${serviceName}</p>
                    <p><strong>Client Name:</strong> ${name}</p>
                    <p><strong>Client Email:</strong> ${email}</p>
                    <p><strong>Budget:</strong> ₹${budget}</p>
                    <h3>Project Requirements:</h3>
                    <p>${requirements}</p>
                `
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(200).json({
            status: 'success',
            message: 'Order placed successfully!'
        });
    } catch (error) {
        console.error('Order submission error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to process order'
        });
    }
});


app.get("/", (req, res) => {
    res.send("Backend is running!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Environment setup:', {
        EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
        EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set',
        PORT: process.env.PORT || 3000
    });
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
