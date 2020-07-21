import React, { Component } from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      var firstName = this.props.data.firstName;
      var lastName = this.props.data.lastName;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var name = this.props.data.name;
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
          <div className="blue-rectangle">            </div>

            {/* <h1 className='responsive-headline fadeIn urduname' id='nameurdu'>
              {' '}
              {name}
            </h1> */}

            <h1 className='responsive-headline fadeIn' id='name_english'>
              {' '}
              {firstName} 
              <span className="lastName"> {lastName}</span>
            </h1>
           
           
            <h3 className='  fadeIn delay-3s'>
              I'm a {city} based <span className="occupation">{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className='social '>{networks}</ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
