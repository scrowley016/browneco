import React from 'react'
import {Form, Button, Image} from 'react-bootstrap'


const Contact =()=>{
    return (
        <div id="contact">
            <div id="titleC">
            <Image src="./pictures/artRoof.png" className="line"/>
            <br></br>
                <h1> For estimates or questions please feel free to contact us</h1>
                <h4>By mail: 98 Forest Drive, Orchard Park, NY 14127</h4>
                <h4>By email: Browneco@verizon.net</h4>
                <h4>By phone: (716) 667-0802</h4>
                <br></br>
                <Image src="./pictures/line.png" className="line"/>
                <h1>Or we can contact you</h1>
            </div>

        <div id="form">
    
        <Form>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control type="email" placeholder="First and Last" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" placeholder="If Applicable" />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Enter Phone" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>How can we help</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit" class="button">
    Send
  </Button>
</Form>
</div>
</div>
    )
}

export default Contact