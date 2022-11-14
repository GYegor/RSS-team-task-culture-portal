import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withTranslation } from 'react-i18next';
import {
  TelegramIcon, OKIcon, TelegramShareButton, OKShareButton,
} from 'react-share';
import Button from 'react-bootstrap/Button';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 'russia flag',
      language: 'Русский',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleMobileShareClick = this.handleMobileShareClick.bind(this);
  }

  changeLanguage(flag, lang, key) {
    const { changeLanguageHandler } = this.props;
    changeLanguageHandler(key);
    this.setState(() => ({
      flag: `${flag} flag`,
      language: lang,
    }));
  }

  handleMobileShareClick() {
    // eslint-disable-next-line no-console
    console.log(this.props);
    if (navigator.share) {
      navigator.share({
        title: 'Yo Bro! Check this out!',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
        url: window.location.href,
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('Your browser doesn\'t support the Web Share API.');
    }
  }

  render() {
    const { flag, language } = this.state;
    const { t, selectContentHandler } = this.props;
    const site = t('site', { returnObjects: true });

    return (
      <Navbar className="header" expand="lg">
        <Navbar.Brand className="logo" href="#home" onClick={() => selectContentHandler('main')}>
          <span>{t('site.title')}</span>
          <span>{t('site.title1')}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <Nav.Link href="#list" onClick={() => selectContentHandler('list')}>{site.persons}</Nav.Link>
          </Nav>
          <i className={flag} />
          <NavDropdown title={language} id="basic-nav-dropdown">
            <NavDropdown.Item href="#rus" onClick={() => this.changeLanguage('russia', 'Русский ', 'ru')}>
              <i className="russia flag" />
              Русский
            </NavDropdown.Item>
            <NavDropdown.Item href="#us" onClick={() => this.changeLanguage('united kingdom', 'English ', 'en')}>
              <i className="united kingdom flag" />
              English
            </NavDropdown.Item>
            <NavDropdown.Item href="#by" onClick={() => this.changeLanguage('belarus', 'Беларуская ', 'by')}>
              <i className="belarus flag" />
              Беларуская
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <div>
          <TelegramShareButton url={window.location.href || ''} title="React-shared title"><TelegramIcon round /></TelegramShareButton>
          <OKShareButton url={window.location.href || ''} title="React-shared title"><OKIcon round /></OKShareButton>
          <Button variant="outline-info" size="sm" onClick={this.handleMobileShareClick}>MOBILE_SHARE</Button>
        </div>

      </Navbar>
    );
  }
}

export default withTranslation()(Header);
