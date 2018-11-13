import React from 'react';
import './Custom.css';
import { Grid, Row, Col } from 'react-bootstrap';

const Ieeejournal = () =>
    (
        <div className="imgieee">
            <Grid>
                <Row >
                    <Col xsHidden md={4}>

                    </Col>
                    <Col xs={12} md={4}>

                        <a className="ieeeanchorlink" target="_blank" rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/8485317"><h1 className="homehead"><b>
                            The Race to 5G Era , LTE and Wi-Fi - IEEE Standard</b></h1></a>
                    </Col>
                    <Col xsHidden md={4}>

                    </Col>
                </Row>

                <Row >

                    <Col md={12} md={4}>
                        <p><h3 className="topicsubhead">Summary</h3></p>
                    </Col>

                </Row>

                <Row className="ieeedesc">
                    <Col xs={18} md={12}>
                    <p>Get ready, get set—and go! for the smart devices of tomorrow that will soar in on the winds of the 5G era. Gigabit connectivity, reduced latency, and increased coverage efficiency will swiftly propel mobile carriers and smart device manufacturers into next-generation connected devices. Watch for the first waves of 5G connected devices coming online in the next few years. Developing markets—where smart devices are the main bridges to the online world—will generate dynamic growth, productivity, and innovation. </p>
                    <p>The new technology will reduce operating and construction costs for service providers. The capability of allowing mobile handsets to use both LTE and LTE Wi-Fi transmission data will enhance network transmission bandwidth and efficiency. The stage is set for connectivity that was once undreamed of—and best of all, it will be available everywhere, to everyone. </p>
                    <p>We are on the brink of a new era for the wireless telecommunications, an era that will change the way that business is done. The fifth generation (5G) systems will be the first realization in this new digital era where the various networks will be interconnected forming a unified system. With support for higher capacity as well as low-delay and machine-type communication services, the 5G networks will significantly improve performance over the current fourth generation (4G) systems and will also offer seamless connectivity to numerous devices by integrating different technologies, intelligence, and flexibility.</p>
                    <p>So far, three main criteria for the 5G standard have been established:
                    <ol>
                        <li>It should be capable of delivering a 1Gbps downlink to start with and multi-gigabits in future</li>
                        <li>Latency must be brought under one millisecond.</li>
                        <li>It should be more energy efficient than its predecessors (though there's no agreement yet on just how much more).</li>
                    </ol>
                    </p>
        
                    <p>"Spectrum is and will remain a major challenge for the success and early rollout of 5G. We don't have enough spectrum in general and 5G is a lot about optimising the use of spectrum. But clearly, allocating more spectrum to 4G and later 5G would help and this is a global challenge... An additional challenge will be to find a globally harmonised band for 5G roaming since all suitable spectrum is already in use in one or another part of the world," said Thibaut Kleiner, head of the European Commission's CONNECT (Communications Networks, Content, and Technology) Directorate-General.
        
                    One solution to the spectrum crunch could be to look beyond the lower-frequency spectrum — between 700MHz and 2.6GHz — used by most carriers today, and move towards higher spectrum bands such as 6GHz, 28GHz, and 38GHz.
        
                    At the top end, beyond 30GHz, these extremely high frequency bands are known as millimetre wave. Bringing those bands into use is both one of the most exciting, and least guaranteed, areas of 5G development.</p>
                    <p>MIMO is another technology likely to arrive in a big way with 5G. Rather than having a single antenna in the receiver and one in the transmitter as is the case now, MIMO (which stands for multiple input, multiple output) envisages a scenario where both sets of equipment have tens, or even a hundred, antennas or more. That translates into better data rates for users, and helps with both spectral and energy efficiency for operators.</p>
        
                    <p>5G and the internet of things
                    Historically, mobile data was something that human-controlled devices, not autonomous machines, consumed, and it was designed accordingly to cater to the usage patterns for phones, and later laptops and tablets. Now, the mobile industry is trying to work out how machines, not least those latency-loathing autonomous cars, will want to consume data. That means getting vertical companies involved in the standardisation process — companies who have historically never had to take an interest in networking and whose core competencies don't involve mobility.</p>
        
                    <p>In this article, we overviewed the MAC and PHY layer features being considered by the two main family of standards, namely 3GPP and IEEE for adoption in the fifth generation (5G) systems. As we stand on the verge of a new digital era, where all devices/things will be connected through internet, the cellular and Wi-Fi technologies are evolving and merging into a unified system to provide a seamless connectivity, reliability, and high data rates. Massive connectivity, advanced multi user techniques, power efficiency, network slicing, edge computing, and new frequency bands, e.g. mmWave and Sub-1 GHz bands are among the features that are being studied and evaluated but as highlighted in this article, many challenges remain that are being addressed within the standardization bodies and the wider research community to allow full exploitation of 5G technologies.</p>
                    <p></p>
                    </Col>

                </Row>


            </Grid>













            
        </div>

    );

export default Ieeejournal;