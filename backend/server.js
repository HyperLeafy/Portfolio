// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


const uri = 'mongodb+srv://<your user name>:<your password>@cluster0.h3zj1.mongodb.net/'; // Enter your cluster login url
const client = new MongoClient(uri);



////////////////////////////////
//////function implementation///
////////////////////////////////
// Elastic Email SMTP configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com', // Elastic Email SMTP server
    port: 2525, // or 587
    auth: {
        user: '', // Replace with your Elastic Email username
        pass: '', // Replace with your Elastic Email password
    },
    debug: true,
});

async function sendMessage(req, res) {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: 'lilesh3016@gmail.com', // Sender's email address
        to: 'lilesh3016@gmail.com',   // The same email address
        subject: subject,
        html: `
            <p>From: ${name}</p>
            <p>Email: ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
        `,
    };
    
    try {
        res.status(200);
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error.message); // Log error message
        res.status(500).json({ error: 'An error occurred while sending the message' });
    }    
}

async function fetchProjects(req, res) {
    try {
        await client.connect();
        const database = client.db('Projects');
        const collection = database.collection('Projects');
        const projects = await collection.find({}).toArray();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'An error occurred while fetching projects' });
    }
}


// Api routes setup 
app.get('/api/projects', fetchProjects);
app.post('/api/contact', sendMessage);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
