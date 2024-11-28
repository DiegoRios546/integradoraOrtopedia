const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Endpoint para guardar citas
app.post('/api/appointments', (req, res) => {
    const { patient_name, patient_problem, patient_email, appointment_date, appointment_time, doctor_name } = req.body;

    const query = `INSERT INTO appointments (patient_name, patient_problem, patient_email, appointment_date, appointment_time, doctor_name) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [patient_name, patient_problem, patient_email, appointment_date, appointment_time, doctor_name], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving appointment.');
        } else {
            res.status(200).send('Appointment saved successfully.');
        }
    });
});

// Iniciar el servidor
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
