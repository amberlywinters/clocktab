import React from 'react';
import logoUrl from './logo.svg';
import './header.css';

export default Header;

function Header() {
  return (
    <Container>
      <Logo/>
      <Link txt={'World Clock'} href={'/time-converter'} />
      <Link txt={'Timer'} href={'/timer-tab'} />
      <Link txt={'Pomodoro'} href={'/pomodoro-timer'} />
      <Link txt={'New Year'} href={'/new-year-countdown'} />
    </Container>
  );
}

function Logo() {
  return (
    <a
     id="header-logo"
     href='/'
     className="big-text"
    >
      <img
       height={39}
       src={logoUrl}
       style={{
        verticalAlign: 'middle',
        display: 'inline-block',
        position: 'relative',
        top: -2,
      }}
      />
      <b style={{verticalAlign: 'middle', paddingLeft: 10, fontSize: '1.55em'}}>Clock Tab</b>
    </a>
  );
}

function Container({children}) {
  return (
    <div
      id='header-container'
      className='glass-background'
    >
      {children}
    </div>
  );
}

function Link({href, txt}) {
  return (
    <a className='header-link' href={href}>{txt}</a>
  );
}