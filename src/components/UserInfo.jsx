import '../App.css';
import { Accordion, Card, Button, ListGroup } from "react-bootstrap"

function UserInfo(props) {

    return (
        <>
            {
                props.cards.map((card, index) => {
                    return (
                        <Accordion className="bg-orange mt-2">
                            <Card className="bg-light">

                                <Card.Header>
                                    <Accordion.Toggle className="text-white text-decoration-none" as={Button} variant="link" eventKey="0">
                                        {card.firstName} {card.lastName}
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <div>

                                        <ListGroup className="text-dark">
                                            <ListGroup.Item >FirstName: {card.firstName} </ListGroup.Item>
                                            <ListGroup.Item>LastName: {card.lastName}</ListGroup.Item>
                                            <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                                            <ListGroup.Item>Says: {card.message}</ListGroup.Item>

                                        </ListGroup>


                                        <Card.Footer>
                                            <Button onClick={() => {
                                                props.deleteInfo(index)
                                            }
                                            }
                                                color="danger" className="bg-danger">Delete ✖</Button>{' '}
                                        </Card.Footer>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    )
                })
            }
        </>
    )
}

export default UserInfo