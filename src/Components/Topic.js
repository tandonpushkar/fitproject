import React from 'react';
import { Grid, Row, Col , Image } from 'react-bootstrap';
import LAN from './images/LAN.png';
import MAN from './images/MAN.png';
import WAN from './images/WAN.png'

const Topic = () =>
    (
        <div>

        <Grid>
            <Row>
                <Col>
                <h1 className = "topicmainhead"> Computer Network | Types of area networks – LAN, MAN and WAN</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <p className="topicdesc">
                The Network allows computers to connect and communicate with different
                computers via any medium. LAN, MAN and WAN are the three major types of the
                network designed to operate over the area they cover.
                There are some similarities and dissimilarities between them.
                One of the major differences is the geographical area they cover,
                i.e. LAN covers the smallest area; MAN covers an area larger than
                LAN and WAN comprises the largest of all.
        </p>
                </Col>
            </Row>

            <Row>
                <Col>
                <h3 className="topicsubhead">Local Area Network (LAN)</h3>
                <p className="subheaddesc">
        It is also called LAN and designed for small physical areas such as an office, group of buildings or a factory. LANs are used widely as it is easy to design and to troubleshoot. Personal computers and workstations are connected to each other through LANs. We can use different types of topologies through LAN, these are Star, Ring, Bus, Tree etc.
        
        LAN can be a simple network like connecting two computers, to share files and network among each other while it can also be as complex as interconnecting an entire building.
        
        LAN networks are also widely used to share resources like printers, shared hard-drive etc.
        
        <p></p>Characteristics of LAN

        <p></p>
        <ol>
                        <li>LAN's are private networks, not subject to tariffs or other regulatory controls.</li>
                        <li>LAN's operate at relatively high speed when compared to the typical WAN.</li>
                        <li>There are different types of Media Access Control methods in a LAN, the prominent ones are Ethernet, Token ring.</li>
                    <li>It connects computers in a single building, block or campus, i.e. they work in a restricted geographical area.</li>
                        </ol>
        
        
        
        </p>
        

                </Col>
            </Row>
            <Row>
            <Col xs={12} md={8}>
            <Image src={LAN} thumbnail responsive />
        </Col>
            </Row>

            <Row>
                <Col>
                <h3 className="topicsubhead">Metropolitan Area Network (MAN)</h3>

                <p className="subheaddesc">
                It was developed in 1980s.It is basically a bigger version of LAN. It is also called MAN and uses the similar technology as LAN. It is designed to extend over the entire city. It can be means to connecting a number of LANs into a larger network or it can be a single cable. It is mainly hold and operated by single private company or a public company
                
                <p></p>Characteristics of MAN
                <ol><li>It generally covers towns and cities (50 km)</li>
               <li> Communication medium used for MAN are optical fibers, cables etc.</li>
               <li> Data rates adequate for distributed computing applications.</li></ol>
               </p></Col>
            </Row>

            <Row>
            <Col xs={12} md={8}>
            <Image src={MAN} thumbnail responsive />
        </Col>
            </Row>

            <Row>
                <Col>
                <h3 className="topicsubhead">Wide Area Network (WAN)</h3>

        <p className="subheaddesc">
        It is also called WAN. WAN can be private or it can be public leased network. It is used for the network that covers large distance such as cover states of a country. It is not easy to design and maintain. Communication medium used by WAN are PSTN or Satellite links. WAN operates on low data rates.
        
       <p></p> Characteristics of WAN
<ol>
<li>It generally covers large distances(states, countries, continents).</li>
<li>Communication medium used are satellite, public telephone networks which are connected by routers.</li>
</ol>



        </p>
                </Col>
            </Row>

            <Row>
            <Col xs={12} md={8}>
            <Image src={WAN} thumbnail responsive />
        </Col>
            </Row>

            <p></p>

        
        </Grid>
            
            

        
        

       
        

        </div>
    );

export default Topic;