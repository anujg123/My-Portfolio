import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce",
      description: "React.js | Node.js | Express.js | Mongodb",
      imgUrl: projImg1,
    },
    {
      title: "Authintication and Security",
      description: "React.js | Node.js | Express.js | Mongodb",
      imgUrl: projImg2,
    },
    {
      title: "Instagram UI",
      description: "Flutter",
      imgUrl: projImg3,
    },
    {
      title: "Social Media",
      description: "React.js | Node.js | Express | Mongodb",
      imgUrl: projImg1,
    },
    {
      title: "Todo App",
      description: "React.js | Redux | Tailwindcss",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio",
      description: "React.js",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am creating a project using Html | Css | JavaScript | React | Node.js | Express Framework | Mongodb database .</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>React.js: React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the view when the underlying data changes.<br></br>
                      Node.js: Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the development of scalable and high-performance web applications.<br></br>
                      Express.js:  Express.js is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of features for web and mobile applications. <br></br>
                      MongoDB:MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It is a document database, which means it stores data in a semi-structured format, making it easy to work with for developers.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
