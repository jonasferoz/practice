import React, { Component } from 'react';
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);

const flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
    }
    render(){
        return(
            <fieldset>
                <p>The lightswitch is currently {this.state.position} </p>
                <button onClick={this.flipSwitch}>Flick Switch</button>
            </fieldset>
        );
    }
}
                
export default LightSwitch;