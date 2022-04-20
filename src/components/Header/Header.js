import React from "react";
import styled from "styled-components";
const Container = styled.div`
  overflow: hidden;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  width: 270px;
 li {
    font-family : Segoe UI;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    position: relative;
    cursor : pointer;
    color : #42474A;
    @media screen and (max-width : 768px) {
      margin : 0 auto;
      text-align : center;
    }
  }
  li:last-child {
    color: #713bdb;
    margin-right : 4rem;
  }
  .line {
    width: 14px;
    height: 2px;
    color: #713bdb;
    background-color: #713bdb;
    position: absolute;
    bottom: 12px;
    left: 16px;
  }
  @media screen and (max-width : 768px) {
    width : 80%;
    margin : 0 auto;
  }
`;
const Header = () => {
  return (
    <Container>
      <List>
        <li>
          <p>Overview</p>
        </li>
        <li>
          <p>Policy</p>
        </li>
        <li>
          <p>Reports</p>
          <div className="line"> </div>
        </li>
      </List>
    </Container>
  );
};

export default Header;
