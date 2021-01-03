import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'

import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'

class App extends Component {
    render () {
        return (
            <Router>
                <Nav/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/product' component={Product} />
                    {/* <Route exact path="/articles" component={Articles} />
                    <Route path="/articles/:id" component={ArticlesDetail} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products/:id" component={ProductDetail} /> */}

                    {/* <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} /> */}
                </Switch>
            </Router>
        )
    }
}
 
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

