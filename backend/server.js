const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, query } = req.body;

  // Configure nodemailer with app password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kanthariyadhwanil@gmail.com", // replace with your admin email
      pass: "dhwANil@##@@##@28052002",             // replace with app password from Google account
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: "kanthariyadhwanil@gmail.com",    // replace with your admin email
    subject: "New Contact Query",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
