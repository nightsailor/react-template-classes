import React, { Component } from "react";

import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
  width: 100vw;
  height: 87vh;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
          <p>Home</p>
      </Wrapper>
    );
  }
}

export default Home;
