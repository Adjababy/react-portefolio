import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
const Project = () => {
  return (
    <div>
         <div>
            <section id="project">
                <Container fluid className="container"  style={{marginTop:'50px',marginBottom:'50px'}}>
                    <h1 className="text-center " style={{fontWeight:'bold'}}>Projects</h1>
                    <Row className="row">
                        <Col className="lg-4 mt-4">
                            <Card className="card projectText " style={{justifyContent:'center',width:"100%",height:"100%"}}>
                                <Card.Img className='card-image'  variant="top" src={process.env.PUBLIC_URL + "/image/IMG_7448.JPG"}/>
                                
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title mt-3"> Portfolio</Card.Title>
                                    <Card.Text>
                                My personal portfolio with HTML5 and Bootstrap
                                    </Card.Text>
                                    <Button variant="primary" href="https://adjababy.github.io/My-portfolio/">Go to the site</Button>
                            </Card.Body>
                            </Card>  
                        </Col>
                        <Col className="lg-4 mt-4">
                            <Card className="card projectText  " style={{justifyContent:'center',width:"100%",height:"100%"}}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/image/logo KTS Trans.jpg"} />
                            <Card.Body>
                                <Card.Title><h5 className='text-danger'> KTS Trans</h5></Card.Title>
                                    <Card.Text>
                                    A website using Canva
                                    </Card.Text>
                                        <Button variant="primary" href="https://ktstrans.my.canva.site/" target='_blank'>Go to the site </Button>
                            </Card.Body>
                            </Card>  
                        </Col>
                        <Col className="lg-4 mt-4">
                            <Card className="card projectText  " style={{justifyContent:'center',width:"100%",height:"100%"}}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/image/telecharger.jpg"} />
                            <Card.Body>
                                <Card.Title><h5 className='text-danger'> A Blog App</h5></Card.Title>
                                    <Card.Text>
                                    A Blog Website using React
                                    </Card.Text>
                                        <Button variant="primary" href="https://github.com/Adjababy/a-blog-app/tree/main" target='_blank'>Go to the site </Button>
                            </Card.Body>
                            </Card>  
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    
    </div>
  )
}

export default Project