import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Education = () => {
  return (
    
    <div> 
       <div>
        <section id="education">
            <Container fluid className="container" >
                <h1 className="text-center " style={{fontWeight:'bold',marginTop:'50px',marginBottom:'50px'}}>Education</h1>
                <Row className="education_row" >
                    <Col className="lg-4 mt-4 education_content">
                    <h3>2018 Baccalaureate's degree</h3>
                    <p>Exact Sciences </p>
                    </Col>
                    <Col className="lg-4 mt-4 education_content">
                    <h3>2019-2021 Bachelor's degree in Telecommunications</h3>
                    <p>University of Tlemcen in Algeria </p>
                    </Col>
                    <Col className='lg-4 mt-4 education_content' >
                      <h3>2021-2023 Master's degree in Network and Telecommunications</h3>
                      <p>University of Tlemcen in Algeria</p>
                    </Col>
                </Row>
            </Container>
        </section>

    </div>
    </div>
  )
}

export default Education