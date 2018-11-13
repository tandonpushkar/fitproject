import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Pushkar from './images/Push.jpg';

const PushkarTandon = () =>
    (
        <div className="pushkardesc">

            <Grid>
                <Row>
                    <p></p>
                    <Col xs={6} md={4}>
                        <Image src={Pushkar} circle responsive />
                    </Col>
                    <Col xs={6} md={4}>
                        <ul type="square" className="pushdesc">
                            <p></p><li>Hi I am Pushkar Tandon . </li>
                            <p></p><li>I have done BCA from IITM janakpuri , IP University (2015 - 2018).</li>
                            <p></p><li>Currently
                            I am doing MCA from LBSIM Dwarka , IP University (2018 - 2021).</li>
                            <p></p><li>I am living in New Delhi.</li>
                            <p></p><li>Self Taught Javscript Developer.</li>
                            <p></p><li>My Hobbies are Sketching , Gymming and Reading Books.</li>
                            <p></p><li>Personal Site : <a target="_blank" rel="noopener noreferrer" href="https://tandonpushkar.com">
                                tandonpushkar.com</a></li>
                        </ul>



                    </Col>
                </Row>
            </Grid>




        </div>
    );

export default PushkarTandon;