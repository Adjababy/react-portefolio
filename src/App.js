import React, { useContext } from 'react';
import './App.css';
import Home from './Component/Home'
 import About from './Component/About'
import Project from './Component/Project'
import Resume from './Component/Resume'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar,Nav,Container,Image, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Component/Contact';
import { MainContext } from './state/MainContext';
import Services from './Component/Services';
function App() {
const changeDarkMode = useContext(MainContext)
  return (
    <div className="state" >
      <Router>
      <Navbar expand="lg" className=" bg-body-tertiary" id='nav' >
      <Container fluid>
      <Navbar.Brand className=" justify-content-between" href="/"> 
          <Image
  src={process.env.PUBLIC_URL + "/image/IMG_7468.PNG"}
  roundedCircle
  style={{ height: "40px", width: "40px" }}
/> Dounamba
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" nav-menu me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
<Nav.Link as={Link} to="/about">About</Nav.Link>
<Nav.Link as={Link} to="/project">Project</Nav.Link>
<Nav.Link as={Link} to="/resume">Resume</Nav.Link>
<Nav.Link as={Link} to="/services">Services</Nav.Link>
<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button id="dark-light-mode" onClick={changeDarkMode}>Dark mode</Button>
        </Navbar.Collapse>
      </Container>
</Navbar>
        <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/about"  children={About} element={<About/>} />
        <Route path="/project" children={Project } element={<Project />} />
        <Route path="/resume" children={Resume} element={<Resume />} />
        <Route path="/services" children={Services} element={<Services />} />
        <Route path="/contact" children={Contact} element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
