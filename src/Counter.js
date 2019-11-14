import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.dispatch({type: 'GIMME_SOME'});
  }

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dispatch({type: 'TAKE_SOME'});
  }

  render() {
    return (
        <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
        </div>
    )
  }
}

export default connect(mapStateToProps)(Counter);
