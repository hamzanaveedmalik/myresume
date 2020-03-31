import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline fadeIn  "> {name}</h1>
                  <h3 className="  fadeIn delay-3s">I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <ul className="social  fadeIn delay-4s">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown  fadeIn delay-5s">
               <a className="smoothscroll" href=""><i className="fa fa-heart"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
