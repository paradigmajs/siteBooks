import React, { Component } from 'react'
// import Banner from './Banner';

class BannerFifth extends Component {
  render() {
    return (
      <section id="five" className="wrapper style2 special fade">
        <div className="container">
          <header>
            <h2>Donation</h2>
            <p>На данном сайте все книги вы можете скачать бесплатно.</p>
            <p>Но вы можете сделать донат на счет автора.</p>
          </header>
          <form method="post" action="#" className="cta">
            <div className="row gtr-uniform gtr-50">
              <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Сумма доната" /></div>
              <div className="col-4 col-12-xsmall"><input type="submit" defaultValue="Get Started" className="fit primary" /></div>
            </div>
          </form>
        </div>
      </section>
      
    )
  }
}

export default BannerFifth;
