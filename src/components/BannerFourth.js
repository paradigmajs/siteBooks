import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import book2 from '../img/book2.jpg';

class BannerFourth extends Component {
  render() {
    return (
      <ReactWOW animation="fadeInRight">
      <section id="three" className="spotlight style3 left">
      
        <div className="content">
          <header>
          <span className='imgBooks'><img src={book2} alt="" /></span>
            <h2>{this.props.name2}</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
          <ul className="actions">
            <li><a href="#" className="button">Подробнее</a></li>
          </ul>
        </div>
        <a href="#five" className="goto-next scrolly">Next</a>
      </section>
      </ReactWOW>
    )
  }
}


export default BannerFourth;