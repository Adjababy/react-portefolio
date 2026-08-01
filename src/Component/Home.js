import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
const Home = () => {
  return (
    <div>
       <section className="home" id="home">
        <Container fluid style={{marginTop:'50px',marginBottom:'50px'}}>
            <Row>
            <Col className="lg-12 md-12 sm-12 xs-12 hero-text">
              <p className='p'>Hi, I am</p>
                <p className="hero_title"> Dounamba Traoré </p>
                <p className="hero_desc ">A Front-End Freelancer Web-Develloper and Network and Telecommunications Ingenieur</p>
            </Col>
            <Col className="lg-4 mt-4 home_Image ">
             <Image
  src={process.env.PUBLIC_URL + "/image/IMG_7501.PNG"}
  roundedCircle
  width={350}
/>

            </Col>
            </Row>
        </Container>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Project/>
      </section>
      <section>
        <Resume/>
      </section>
      <section>
      <Services/>
      </section>
      <section>
       <Contact/>
      </section>
      <section>
       <Footer/>
      </section>
      
      </div>
      
  )
}

export default Home