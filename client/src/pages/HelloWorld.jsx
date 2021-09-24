import React, { Component } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Wrapper>
        <p>Hello World!</p>
      </Wrapper>
    );
  }
}

export default HelloWorld;
