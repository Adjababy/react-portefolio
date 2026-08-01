import React from 'react'
import { Container,Image, Row, Col} from 'react-bootstrap'
import FormContact from './FormContact'

const Contact = () => {
  return (
    <div>
      <h1  style={{marginTop:"50px",marginBottom:"50px",fontWeight:'bold',textAlign:'center'}}>Contacts</h1>
        <Container fluid className="contact bd-grid" >
       <Row className='contact' >
        <Col className='lg-4 '>
        <p className='mt-4'>For any request contact-me or send me a message.</p>
        <a className='mt-4 a d-flex' href="tel:+223 91 67 80 49"> 
        < Image src='image/IMG_7458.PNG' 
        style={{width: "50px",height: "50px" }}   
            alt="number_image"> 
            </Image>+223 91 67 80 49</a>   
        <a className='mt-4 a d-flex' href=" mailto:dounambatraore@gmail.com"> 
        < Image src='image/IMG_7505.PNG' 
        style={{width: "40px",height: "40px" }}   
            alt="E-Mail_image"> 
            </Image>
            dounambatraore@gmail.com
            </a> 
        </Col>     
           <Col className='lg-4'>
           <FormContact/>
           </Col>    
        </Row>
        </Container>
    </div>
  )
}

export default Contact