// server.js

const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { from_email, from_name, subject, message } = req.body;

  // Use emailjs or another email library to send the email
  emailjs.send('service_abpohsi', 'template_x25borb', {
    to: 'divyamgoyal878@gmail.com',
    name: from_name,
    from: from_email,
    subject: subject,
    text: message,
  });

  res.status(200).json({ message: 'Email sent successfully!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
