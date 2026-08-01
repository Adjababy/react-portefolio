import React from 'react'
import {Container, Card,Col,Row } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
        <section id="services">
            <Container fluid className="container" style={{marginTop:'50px',marginBottom:'50px'}}>
                <h1 className="text-center "  style={{fontWeight:'bold'}}>Services</h1>
                <Row className="row">
                    <Col className="lg-4 mt-4">
                        <Card className="card servicesText " style={{justifyContent:'center',width:"100%",height:"100%"}}>
                            <Card.Body className="card-body">
                                <Card.Title className="card-title mt-3">Website Development</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-image'  variant="top" src="image/IMG_7438.JPG"/>
                        </Card>  
                    </Col>
                    <Col className="lg-4 mt-4">
                        <Card className="card servicesText  " style={{justifyContent:'center',width:"100%",height:"100%"}}>
                            <Card.Body className="card-body">
                                <Card.Title className="card-title mt-3">Website Design</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-image' variant="top" src="image/IMG_7440.JPG"/>
                        </Card>  
                    </Col>
                </Row>
            </Container>
        </section>

    </div>
  )
}

export default Services