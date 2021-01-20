
import './App.css';
import React, { useRef, useState } from 'react';
import { Accordion, Card, Container, Button, Col, Row, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import UserInfo from "./components/UserInfo"

function App() {

  const [cards, setCards] = useState([])
  const firstNameInput = useRef()
  const lastNameInput = useRef()
  const emailInput = useRef()
  const messageInput = useRef()

  function handleInput(event) {
    event.preventDefault()
    const firstName = firstNameInput.current.value
    const lastName = lastNameInput.current.value
    const email = emailInput.current.value
    const message = messageInput.current.value

    const object = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    }

    if (object.firstName && object.lastName && object.email && object.message) {
      setCards([...cards, object])
    }

    firstNameInput.current.value = ""
    lastNameInput.current.value = ""
    emailInput.current.value = ""
    messageInput.current.value = ""
  }

  function deleteInfo(index) {
    cards.splice(index, 1)
    setCards([...cards])
  }


  return (
    <>
      <Container>

        <Form onSubmit={handleInput}>
          <h1 className="mb-5 text-center">REACT FORM </h1>
          <Row>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control className="bg-purple text-white" ref={firstNameInput} type="text" placeholder="Firstname" />
              </Col>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="bg-purple text-white" ref={lastNameInput} type="text" placeholder="Lastname" />
              </Col>
            </Form.Group>
          </Row>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="bg-purple text-white" ref={emailInput} type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Say something!</Form.Label>
            <Form.Control className="bg-purple text-white" ref={messageInput} as="textarea" rows={6} />
          </Form.Group>
          <Button className="text-white mb-5 bg-orange px-4 py-2" onClick={handleInput} variant="" type="submit">
            Add
      </Button>
        </Form>
        <UserInfo cards={cards} deleteInfo={deleteInfo} />

        <footer>
          <p className="text-center text-muted mt-5 copyright">Build by
        <a className="text-muted " href="https://github.com/yagnurl">  Yagnur Tetikcan</a></p>
        </footer>
      </Container>

    </>
  );
}

export default App;