import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const fireFlyCount = window.reactNightscapeOptions.fireflyCount;
    this.setState(
      {fireFlyOptions: {count: Number(fireFlyCount)}},
      () => this.createFireFlies()
    )
    
  }

  createFireFlies() {
    const count = this.state.fireFlyOptions.count;
    let fireFlies = [];
    for( let i = 0; i < count; i++) {
      if(i % 2 == 0) {
        fireFlies.push(
        <FireFly
          color={'hsla(149, 69%, 51%, 1)'}
          xCoord={10 * i}
          yCoord={10 * i}
        />);
      } else {
        fireFlies.push(
        <FireFly
          color={' hsl(52, 100%, 65%, 1)'}
          xCoord={10 * i}
          yCoord={10 * i}
        />);
      }
    }
    this.setState({fireFlies: fireFlies});
  }

  render() {
    let renderFlies;
    if(this.state.fireFlies) {
      renderFlies = this.state.fireFlies.map((fireFly, index) => fireFly);
    }
    return (
      <div className="App">
        {renderFlies}
      </div>
    );
  }
}



const fireflyblink = (top, left) => keyframes`
  0% {
    box-shadow: 0 0 10px hsla(149, 69%, 51%, 0), 0 0 20px hsla(149, 69%, 51%, 0), 0 0 30px hsla(149, 69%, 51%, 0), 0 0 40px hsla(149, 69%, 51%, 1), 0 0 70px hsla(149, 69%, 51%, 1), 0 0 80px hsla(149, 69%, 51%, 1), 0 0 100px hsla(149, 69%, 51%, 1), 0 0 150px hsla(149, 69%, 51%, 1);
    top: ${top + '%'};
    left: ${left + '%'};
  }
  25% {
    top: ${(top - 20) + '%'};
    left: ${(left + 10) + '%'};
  }
  50% {
    box-shadow: 0 0 5px hsla(149, 69%, 51%, 0), 0 0 10px hsla(149, 69%, 51%, 0), 0 0 15px hsla(149, 69%, 51%, 0), 0 0 20px hsla(149, 69%, 51%, 1), 0 0 35px hsla(149, 69%, 51%, 1), 0 0 40px hsla(149, 69%, 51%, 1), 0 0 50px hsla(149, 69%, 51%, 1), 0 0 75px hsla(149, 69%, 51%, 1);
    top: ${(top + 20) + '%'};
    left: ${(left - 50) + '%'};
  }
  75% {
    top: ${(top + 30) + '%'};
    left: ${(left + 30) + '%'};
  }
  100% {
    box-shadow: 0 0 10px hsla(149, 69%, 51%, 0), 0 0 20px hsla(149, 69%, 51%, 0), 0 0 30px hsla(149, 69%, 51%, 0), 0 0 40px hsla(149, 69%, 51%, 1), 0 0 70px hsla(149, 69%, 51%, 1), 0 0 80px hsla(149, 69%, 51%, 1), 0 0 100px hsla(149, 69%, 51%, 1), 0 0 150px hsla(149, 69%, 51%, 1);
    top: ${(top + 40) + '%'};
    left: ${(left - 20) + '%'};
  }
`;

const FireFly = styled.div`
  background-color: ${props => props.color};
  animation: ${props => fireflyblink(props.yCoord, props.xCoord)} 15s linear infinite normal;
  height: 5px;
  width: 5px;
  position: absolute;
  top: ${props => props.yCoord + '%'};
  left: ${props => props.xCoord + '%'};
  border-radius: 50%;
`;

export default App;
