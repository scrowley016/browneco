import React, {useState} from 'react'
import {Form, Button, Image} from 'react-bootstrap'
import emailjs from 'emailjs-com';



  export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_x0is3cg', 'template_qexgofq', e.target, 'user_NxYW5aAPmWc7uNzVzbXet')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    //checking for breaks
  
  
    return (
        <div id="contact">
            <div id="titleC">
            <br></br>
            <div>
            <Image src="./pictures/email.png" width="200px" />
            </div>
                <h1> To contact us</h1>
                <br></br>
                <h4>By Mail: 98 Forest Drive, Orchard Park, NY 14127</h4>
                <a href="mailto:browneco@verizon.net">By Email: browneco@verizon.net</a>
                <a href="tel:7166670802">By Phone: (716) 667-0802</a>
                <br></br>
                <Image src="./pictures/line.png" className="line"/>
                <h1>Or we can contact you</h1>
            </div>

        <div id="form">
    
        <Form id="ContactForm" onSubmit={sendEmail}>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control type="text" placeholder="First and Last"  name="name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" placeholder="If Applicable" name="buisness" />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"/>
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Enter Phone" name="phone"  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>How can we help</Form.Label>
    <Form.Control as="textarea" rows={3} name="text"  />
  </Form.Group>
  <Button variant="primary" type="submit" class="button">
    Send
  </Button>
</Form>
</div>
</div>
    )
}
