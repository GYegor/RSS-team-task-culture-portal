import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ArchitectOfTheDay from './componentParts/ArchitectOfTheDay';
import AboutThePortal from './componentParts/AboutThePortal';
import OurTeam from './componentParts/OurTeam';


class MainPage extends Component {
  static getRandomArchitect(architects) {
    const randomIndex = Math.floor(Math.random() * (architects.length - 1));
    return architects[randomIndex];
  }

  render() {
    const { architects } = this.props;
    const architectOfTheDay = MainPage.getRandomArchitect(architects);

    return (
      <main>
        <Container>
          <Row>
            <Col>
              <AboutThePortal />
            </Col>
            <Col>
              <ArchitectOfTheDay architect={architectOfTheDay} />
            </Col>
          </Row>
          <Row>
            <OurTeam />
          </Row>
        </Container>
      </main>
    );
  }
}

export default MainPage;
