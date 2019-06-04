import React, { Component } from 'react'
import ReactWOW from 'react-wow'
import book1tom1 from '../img/book1tom1.jpg';


class BannerThird extends Component {

  render() {
    return (
      <ReactWOW animation = "fadeInLeft">
      <section id="two" className="spotlight style2 right">
     
      <div className="content">
      
        <header>
        <span className='imgBooks'><img src={book1tom1} alt="" /></span>
          <h2>{this.props.name}</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul className="actions">
          <li><a href="#" className="button">Подробнее</a></li>
        </ul>
      </div>
      <a href="#three" className="goto-next scrolly">Next</a>
    </section>
    </ReactWOW>
    )
  }
}



export default BannerThird;
