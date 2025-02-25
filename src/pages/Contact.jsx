import React from "react";
import "../styles/Contact.css"; // Import the shared styles

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Page</h1>
      <p>If you'd like to get in touch, you can reach me at:</p>
      <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      {/* Add more contact details as necessary */}
    </div>
  );
}

export default Contact;