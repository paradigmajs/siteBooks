import React from 'react';
import logo from './logo.svg';
import './App.css';
import Somepage from './components/somepage'
import Banner from './components/Banner';
import BannerSecond from './components/BannerSecond.js';
import BannerThird from './components/BannerThird';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// рекомендовано
import createBrowserHistory from 'history/createBrowserHistory'
import BannerFourth from './components/BannerFourth';
import BannerFifth from './components/BannerFifth';





const history = createBrowserHistory();

const Home = ()=>( <h1>Home</h1> )

class App extends React.Component {
  render(){
    return(
      <BrowserRouter history={history}>
      	<div id="page-wrapper">
          <header id="header">
          <h1 id="logo">
              <Link to="/">Theos and Sophia</Link>
          </h1>
          </header>
          <Banner/>
          <BannerSecond/>
          <BannerThird name={this.props.name}/>
          
          <BannerFourth name2={this.props.name2}/>
          <BannerFifth/>
         
         <footer id="footer">
      <ul className="icons">
          <li>
              <a href="#" className="icon alt fa-twitter">
                  <span className="label">Twitter</span>
              </a>
          </li>
          <li>
              <a href="#" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
          </li>
          <li>
              <a href="#" className="icon alt fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
          </li>
          <li>
              <a href="#" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
          </li>
          <li>
              <a href="#" className="icon alt fa-github">
                <span className="label">GitHub</span>
              </a>
          </li>
          <li>
              <a href="#" className="icon alt fa-envelope">
                <span className="label">Email</span>
              </a>
          </li>
      </ul>
    </footer>
        </div>
        <hr/>

        <Route exact path = "/" component={Home} />
        </BrowserRouter>
    )
  }
}
function mapStateToProps(state){
  return{
    name: state.Info.firstBook.name,
    name2: state.Info.secondBook.name 
  } 
}


export default connect(mapStateToProps)(App);
