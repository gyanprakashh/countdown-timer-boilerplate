import React,{useRef} from 'react';

class CountdownForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onSubmit.bind(this);
    }
    
     onSubmit(e) {
       //This will give you string for seconds. Do not remove refs
       e.preventDefault();
        var secondsStr = this.refs.seconds.value;
        if(secondsStr!=="" && parseInt(secondsStr)>0){
            const sec=parseInt(secondsStr);
            this.props.onSetCountdownTime(sec);
        }

       
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
            </div>
        );
    }
}

export default CountdownForm;