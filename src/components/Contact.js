import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", formData); // Port should match backend server
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", query: "" });
    } catch (error) {
      console.error("Error sending message:", error); // Log error for debugging
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.description}>Feel free to reach out to me via phone, email, or by filling out the form below.</p>

      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <AiOutlinePhone style={styles.icon} />
          <span style={styles.text}>8758009486</span>
        </div>
        <div style={styles.contactItem}>
          <AiOutlineMail style={styles.icon} />
          <span style={styles.text}>
            <a href="mailto:kanthariyadhwanil@gmail.com" style={styles.link}>kanthariyadhwanil@gmail.com</a>
          </span>
        </div>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="query"
          placeholder="Your Query"
          value={formData.query}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
    color: "#f2f2f2",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#a29bfe",
  },
  description: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginBottom: "2rem",
    color: "#cccccc",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.2rem",
  },
  icon: {
    fontSize: "2rem",
    color: "#a29bfe",
  },
  text: {
    color: "#f2f2f2",
  },
  link: {
    color: "#a29bfe",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #cccccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #cccccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#a29bfe",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;
