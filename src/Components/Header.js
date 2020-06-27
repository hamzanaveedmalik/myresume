import React, { Component } from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var english = this.props.data.english;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id='home'>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline fadeIn urduname' id='nameurdu'>
              {' '}
              {name}
            </h1>
            <h1 className='responsive-headline fadeIn' id='name_english'>
              {' '}
              {english}
            </h1>
            <h3 className='  fadeIn delay-3s'>
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className='social '>{networks}</ul>
          </div>
        </div>
        <p className='scrolldown  fadeIn delay-5s'>
          <a className='smoothscroll' href=''>
            <i className='fa fa-heart'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
