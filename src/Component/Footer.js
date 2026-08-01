import React from "react";
import { Container, Row, Col,Image } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer mt-4">
      <h1  style={{marginTop:"50px",marginBottom:"50px",fontWeight:'bold',textAlign:'center',color:'white'}}>Socials</h1>
      <Row  md={4} className="footer-body mt-5">
          <a href="https://github.com/Adjababy" target="_blank" > 
          <Image src="image/IMG_7456.JPG " 
          style={{width: "50px",height: "50px"}} 
          alt="github_image">
          </Image></a>
             <a href="http://linkedin.com/in/adja-traore-472444258" target="_blank"> 
             <Image 
             src="image/IMG_7455.PNG" 
             alt="linkedin_image" 
             style={{width: "50px",height: "50px"}}>
             </Image>
             </a> 
             <a href="http://www.facebook.com/dounamba.traore.35" target="_blank"> 
             <Image 
             src="image/IMG_7457.PNG" 
             alt="linkedin_image" 
             style={{width: "50px",height: "50px"}}>
             </Image>
             </a> 
      </Row>
      <Row  className="footer-copywright mt-5" style={{display:'inline-flex',color:"white"}}>
          <h3>Designed and Developed by Dounamba Copyright © {year} | All Rights Reserved.</h3>
        
      </Row>
    </Container>
    
  );
}

export default Footer;
