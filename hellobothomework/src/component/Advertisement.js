import React from "react";
import styled from "styled-components";

function Advertisement() {
  return (
    <Adwrap>
      <div id="imgArea">ad</div>
    </Adwrap>
  );
}

export default Advertisement;

const Adwrap = styled.div`
  width: 60vw;
  height: 20vh;
  margin: 0 auto;
  text-align: center;
  border: solid 1px;
`;
