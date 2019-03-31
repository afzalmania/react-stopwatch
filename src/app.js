import React,{Component} from 'react';
import Home from './components/Home';
import Charts from './components/Charts';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div id="wrapper">
                    <Header />
                    <div id="page-wrapper">
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/dashboard" component={Home} exact />
                            <Route path="/charts" component={Charts} exact />
                            <Route path="/registration" component={Registration} exact />
                            <Route path="/login" component={Login} exact />
                            <Route component={Error} exact />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </HashRouter >
        );
    }
}

export default App;
