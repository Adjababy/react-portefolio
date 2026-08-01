import React from 'react'
import { Col,Row, Container, Image } from 'react-bootstrap'
const Skills = () => {
  return (
    <div>
        <h1 className="section-title text-center"  style={{fontWeight:'bold',marginTop:"50px",marginBottom:"50px"}}>Skills</h1>
        <section className="skills section" id="skills">
        <Container fluid  className='d-flex'>
            <Row>
                <div>
                    
                <Col className='lg-4  mt-4 '>
                
                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Here are some skills I'm experimented with it.</p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">React JS</span>
                            </div>
                            <div className="skills__bar skills__React">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">Boosttrap</span>
                            </div>
                            <div className="skills__bar skills__bootstrap">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">75%</span>
                            </div>
                        </div>
                </div>
           
                </Col>
                </div>
                
                <br/>
                <div> 
                <Col className='lg-4 mt-4 d-flex'>   
                 <Image src={process.env.PUBLIC_URL + "/image/IMG_7433.JPG"} className='skills__Image '></Image>
                   
                    </Col>
                    </div>
            </Row>
        </Container>
        </section>
    </div>
  )
}

export default Skills