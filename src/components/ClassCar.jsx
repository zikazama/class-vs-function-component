import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount(){
    console.log('Component Did Mount Executed');
  }

  componentDidUpdate(){
    console.log('Component Did Update Executed');
  }

  componentWillUnmount(){
    alert('Halaman ditutup ya');
    console.log('Component Will Unmount Executed');
  }

  render() {
    return (
      <h1 onClick={this.incrementCount}>
        Halo {this.state.count}x {this.props.name} in {this.props.address}
      </h1>
    );
  }
}

export default Car;
