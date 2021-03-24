import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }
    MakeCount = () =>{
        this.setState({count: this.state.count + 1,})
    }
    render(){
        return(
            <div>
                <p>Here the count: {this.state.count}</p>
                <button onClick={ this.MakeCount }>Count this!</button>
            </div>
        )
    }
}
export default Counter;