import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Custom.css';

const Home = () =>
    (
        <section>
            <div className="imghome">
                <Grid>
                    <Row>
                        <Col xsHidden md={4}>

                        </Col>
                        <Col xs={12} md={4}>
                            <h1 className="homehead">FUNDAMENTALS OF IT</h1>
                        </Col>
                        <Col xsHidden md={4}>

                        </Col>
                    </Row>

                </Grid>
            </div>

            <div>
                <Grid>
                    <Row>
                        <Col>
                            <p>
                                <h3 className="homesub">
                                    Computing and programming are essential to leverage the technical
                                        skills of a student. These techniques equip the students with
                                         know-how of the latest technologies and reduce considerable
                                         time in solving problems. The Fundamentals of Information
                                         Technology has become essential the present age of computer technology
                                          and information, as the applications of information technology can be
                                           found in all aspects of our lives.
                    </h3>

                            </p>
                        </Col>
                    </Row>
                    <Row>

                        <Col>
                            <p>

                                <h4 className="homesub">
                                    <h3 className="topicsubhead">
                                        Project :
                    </h3>
                                    This is our Web Project based upon Fundamentals of IT . This project
                                        includes 1 Topic of FIT , IEEE Journal and team member Introduction.
                            </h4>

                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className="homesub">
                                <h3 className="topicsubhead"> MCA 1 SEM </h3>
                                <p>Subject : FIT</p>
                                <p>College : Lal Bahadur Shastri Institute Of Management</p>
                                <p>Place : New Delhi</p>
                                <p>Teacher : Prof. Shuvro Roy</p>
                                <p>Department : Information Technology</p>
                            </h5>
                        </Col>
                    </Row>

                    <Row>

                        <Col>
                            <p>

                                <h3 className="topicsubhead">We have used React , React-Router and React-bootstrap to make this project. </h3>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </section>
    );

export default Home;