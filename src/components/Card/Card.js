import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 270px;
  background-color: white;
  background: #ffffff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.06);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 15px;
  .progress{
    color: #000;
    background: rgba(242, 241, 243, 1);
  }
  .progress__policy__bar {
    height: 4px;
    width: 40%;
    color: #fff !important;
    background-color: rgba(38, 88, 89, 1);
   background-color : rgba(51, 214, 159, 1);
    border-radius: 2px;
  }
  .progress__claim__bar {
    height: 4px;
    width: 80%;
    color: #fff !important;
    background-color: rgba(113, 59, 219, 1);
    border-radius: 2px;
  }
`;

const Card = () => {
  return (
    <Container>
      <Content>
        <div style={{ padding: "0px" }}>
          <h3 style={{ fontSize: "30px" }}>1000</h3>
          <p>Total Value of Disbursement</p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Policy</p>
            <p>
              400<span style={{ position: "relative", bottom: "5px" }}>$</span>
            </p>
          </div>
          <div className='progress'>
            <div className='progress__policy__bar'></div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Claim</p>
              <p>
                400
                <span style={{ position: "relative", bottom: "5px" }}>$</span>
              </p>
            </div>
            <div className='progress'>
              <div className='progress__claim__bar'></div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Card;
