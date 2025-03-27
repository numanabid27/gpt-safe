import React from 'react'
import React, { useState, useEffect, useRef } from 'react';
import { SecondHeading } from "../../global/headings/second-heading/SecondHeading";
import style from "./number.module.css";
// import { Row, Col } from 'react-bootstrap';
function about() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Welcome to our company.</p>
      <p>Our mission is to provide high-quality services and products.</p>
      <p>Contact us at: 123 Main St, City, State, 12345</p>
      <p>Email: info@company.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  )
}

export default about
