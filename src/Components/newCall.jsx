import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"


class NewCall extends React.Component {
    render() {
        return (
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Name
    </Form.Label>
                            <Col sm="10">
                                <Form.Control name="n_" required placeholder="Name *" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Product Name
    </Form.Label>
                            <Col sm="10">
                                <Form.Control name="product_name" required placeholder="Product Name *" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Potential Price
    </Form.Label>
                            <Col sm="10">
                                <Form.Control name="product_name" required placeholder="Potential Price *" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Original Price
    </Form.Label>
                            <Col sm="10">
                                <Form.Control name="product_name" required placeholder="Original Price *" />
                            </Col>
                        </Form.Group>
                        <div key={`4-seconds`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`4-seconds`}
                                label={`4 Seconds`}
                            />
                        </div>
                        <div key={`agenda`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`agenda`}
                                label={`Agenda`}
                            />
                        </div>
                        <div key={`motivation`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`motivation`}
                                label={`Motivation`}
                            />
                        </div>
                        <Form.Group>
                            <Form.Label>Needs</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Do they have money?</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Decision Maker?</Form.Label>
                            <Form.Control as="textarea" rows="2" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time / Urgency</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Future Pacing / Goals</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <div key={`bridging`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`bridging`}
                                label={`Bridging`}
                            />
                        </div>
                        <div key={`money`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`money`}
                                label={`Money`}
                            />
                        </div>
                        <Form.Group>
                            <Form.Label>Objections</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <div key={`boom`} className="mb-3">
                            <Form.Check
                                custom
                                type={'checkbox'}
                                id={`boom`}
                                label={`Boom!!!`}
                            />
                        </div>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default NewCall;