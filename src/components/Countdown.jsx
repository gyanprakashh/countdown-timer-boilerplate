import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
  

    render() {

        return (
            <div>
                <Clock timeInSeconds={this.count}/>
                <CountdownForm onSetCountdownTime={val=>this.setState({count:val})}/>
            </div>
        );
    }
}

export default Countdown;