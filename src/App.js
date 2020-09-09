import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch, Route, Redirect, NavLink} from 'react-router-dom';
import Header from './components/Header';
import News from './components/News';
import Footer from './components/Footer';

// 01ff551c8604416ca22e94875f6265f1
// newsapipwd

// new api gnews
// token: c51cb0e8f9fb370b0748b171287f48d5
// GET https://gnews.io/api/v3/topics/{topic}?token=API-Token

// https://gnews.io/api/v2/?q=example&country=in&lang=en


// world	https://gnews.io/api/v3/topics/world
// nation	https://gnews.io/api/v3/topics/nation
// business	https://gnews.io/api/v3/topics/business
// technology	https://gnews.io/api/v3/topics/technology
// entertainment	https://gnews.io/api/v3/topics/entertainment
// sports	https://gnews.io/api/v3/topics/sports
// science	https://gnews.io/api/v3/topics/science
// health	https://gnews.io/api/v3/topics/health

class App extends Component{

constructor(props){
  super(props);
  this.state={
    // bitcoin:"https://newsapi.org/v2/everything?q=bitcoin&from=2020-08-09&sortBy=publishedAt&apiKey=01ff551c8604416ca22e94875f6265f1",
    // busines:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=01ff551c8604416ca22e94875f6265f1",
    // apple:"https://newsapi.org/v2/everything?q=apple&from=2020-09-07&to=2020-09-07&sortBy=popularity&apiKey=01ff551c8604416ca22e94875f6265f1",
    tech:"https://gnews.io/api/v2/?q=example&token=c51cb0e8f9fb370b0748b171287f48d5",
    // wallstreet:"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=01ff551c8604416ca22e94875f6265f1"

  }

}

render() {
  return (
    <div>

      <BrowserRouter>
      <Header />

      <Switch>
        {/* <Route exact path="/" component={()=>( 
              <News url={this.state.tech} />
          )} /> */}
          <Route path="/apple" component={()=>( 
              <News url={this.state.apple} />
          )} />
          <Route path="/bitcoin" component={()=>( 
              <News url={this.state.bitcoin} />
          )} />
          <Route path="/wallstreet" component={()=>( 
              <News url={this.state.busines} />
          )} />
          <Route path="/tech" component={()=>( 
              <News url={this.state.tech} />
          )} />
          <Redirect to="/tech" />
      </Switch>

      <Footer/>
      </BrowserRouter>



    </div>
  );
}
}

export default App;
