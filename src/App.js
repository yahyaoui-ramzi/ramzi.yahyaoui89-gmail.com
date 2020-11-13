import React from 'react'
import "./App.css";
import { Button,Form } from 'react-bootstrap'; 

import FormDialog from './Modal';


function App() {
  return ( 
    <div>
      <FormDialog/>

    {/*  <Form>
   <Form.Group controlId="formBasicEmail">
    <Form.Label className="test">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="textMuted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}


    </div>
    

  );
}

export default App;
