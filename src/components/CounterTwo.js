import React, {Component} from 'react';


class CounterTwo extends Component {
    constructor(props){
        super(props);
            this.state = {
                countThis : 10,
            }
    }
    render(){
        return(
            <div>
                <p>This is the NEW count {this.state.countThis} </p>
                <button onClick ={ () => {
                    this.setState({countThis : this.state.countThis + 1})}}>Button Two</button>
            </div>
        )
    }   
}
export default CounterTwo;
