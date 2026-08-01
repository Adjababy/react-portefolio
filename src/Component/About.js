import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <div>
      <Container fluid style={{marginTop:'50px',marginBottom:'50px'}}>
        <Row className="mt-4 ">
        <Col className="lg-4">
          <Image src={process.env.PUBLIC_URL + "/image/IMG_1644.JPG"} className="w-100 h-90" roundedCircle />
        </Col>
          <Col className="lg-8 ">
          <h1 className=" about me " >About Me</h1>
              <p className="home-about-body hero-text">
                <b style={{fontSize:'30px'}}> I am Dounamba</b> <br/>
                   Freelancer Web-Developper and <b className="text-primary f-w-b">Network and Telecommunications Ingenieur from Mali.</b>
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="text-primary">
                    {" "}
                    C++, Python, HTML, CSS and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="text-primary">
                    {" "}
                     ReactJS and Boosttrap.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="text-primary">
                    {" "}
                    Modern Javascript Library and Frameworks.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="text-primary">building new web technologies and products. </b>
              
               Curious, autonomous and dynamic but above all I love working in a team.<br/>
               I am also a fan of manga, anime and also K-pop and many other cultures.<br/>
                I speak and write French very well but I'm doing quite well in English too.
                 I like to travel and also learn new things whatever the field. 
              </p>
          
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default About;
