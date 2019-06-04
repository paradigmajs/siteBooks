import React, { Component } from 'react'
import author from "../img/author.jpg"
import ReactWOW from 'react-wow'
class Banner extends Component {
  render() {
    return (
			<ReactWOW animation="pulse">
      <section id="banner">
					<div className="content">
						<header>
							<h2>Владимир Валентинович Базюкин</h2>
							<p>Родился в 1954 году в Подмосковье<br />
							На данный момент проживает в городе Бишкек</p>
						</header>
						<span className="image"><img src={author} alt="" /></span>
					</div>
					<a href="#one" className="goto-next scrolly">Next</a>
				</section>
				</ReactWOW>
    )
  }
}

export default Banner;
