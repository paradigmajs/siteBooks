import React from 'react';
import logo from './logo.svg';
import './App.css';
import Somepage from './components/somepage'
import Banner from './components/Banner';
import bannerSecond from './components/bannerSecond';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// рекомендовано
import createBrowserHistory from 'history/createBrowserHistory'

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
          <bannerSecond/>
        </div>
        <hr/>

        <Route exact path = "/" component={Home} />
        </BrowserRouter>
    )
  }
}

export default App;
