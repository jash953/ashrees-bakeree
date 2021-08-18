import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="form-container">
      <h2>CONTACT US!</h2>
      <form className="contact-form">
        <div className="name-container">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="contact-info">
          <input
            type="tel"
            id="phone"
            name="phonenumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Phone Number"
          />
          <input
            type="email"
            id="email"
            name="emailaddress"
            placeholder="Email Address"
          />
        </div>
        <textarea
          id="request"
          name="request"
          placeholder="What would you like to order?"
        ></textarea>

        <input id="submit" type="submit" value="Submit Request"></input>
      </form>
    </div>
  );
};

export default Contact;