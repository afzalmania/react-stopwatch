import React, { Component } from 'react';
import '../style.css';

class App extends Component {
    constructor() {
        super();
        this.state = { minute: 0, second: 0, itemArray: [],status:true }
        this.startCounter = this.startCounter.bind(this);
        this.lapse = this.lapse.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    startCounter() {
        if (this.state.status) {
            this.setState({status:false});
            this.ticker = setInterval(() => {
                this.setState((state, props) => {
                    return {
                        second: state.second == 59 ? 0 : state.second + 1,
                        minute: state.second == 59 ? state.minute + 1 : state.minute,
                    }
                });
            }, 1000);
        }else{
            this.setState({status:true})
            clearInterval(this.ticker);    
        }
    }
    
    lapse() {
        const item = this.state.itemArray;
        const min = this.state.minute;
        const sec = this.state.second;
        item.push({ min, sec });
        this.setState({ itemArray: item });
    }
    handleReset() {
        this.setState({ minute: 0, second: 0, itemArray: [] });
    };
    render() {
        return <div>
            <h1>Afzal's StopWatch</h1>
            <div id="clockdiv">
                <div>
                    <span className="minutes">{this.state.minute}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span className="seconds">{this.state.second}</span>
                    <div className="smalltext">Seconds</div>
                </div>
                <div className="col-md-12 lap-grp">
                    {this.state.itemArray.map((item, index) => {
                        return (
                            <div className="alert alert-danger" key={index}>Lap-{index + 1} {item.min} : {item.sec}</div>
                        )
                    })}
                </div>
                <div className="col-md-12 btn-grp">
                    <button className="btn btn-success" onClick={this.startCounter}>{this.state.status?'Start':'Stop'}</button>
                    
                    <button className="btn btn-warning" onClick={this.lapse}>Lap</button>
                    <button className="btn btn-primary" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        </div>;
    }


}

export default App;