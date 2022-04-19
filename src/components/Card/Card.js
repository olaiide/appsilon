import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  padding: 0px 15px;
  .first__content {
    height: 100px;
    background-color: red;
    h3 {
      font-size: 60px;
    }
  }
  .progress {
    color: #000;
    background: rgba(242, 241, 243, 1);
  }
  .progress__policy__bar {
    height: 4px;
    width: 40%;
    color: #fff !important;
    background-color: rgba(38, 88, 89, 1);
    background-color: rgba(51, 214, 159, 1);
    border-radius: 2px;
  }
  .progress__claim__bar {
    height: 4px;
    width: 85%;
    color: #fff !important;
    background-color: rgba(113, 59, 219, 1);
    border-radius: 2px;
  }
  .total,
  .policy,
  .claim {
    font-family: Segoe UI;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    color: #42474a;
  }
  .amount__ {
    font-family: Segoe UI;
    font-size: 15px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
  }
  .dollar__{
    position:relative ;
    bottom : 5px;
    padding : 1px;
    color : #42474A;
    font-size : 13px;
  }
`;
const FirstContent = styled.div`
  height: 50px;
  h3 {
    font-family: Segoe UI;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0em;
  }
  div {
    position: relative;
  }
  .amount {
    font-family: Segoe UI;
    font-size: 43px;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 50px;
    position: absolute;
    top: -55px;
    color: #42474a;
  }
  .total {
    position: absolute;
    top: 26px;
  }
  .dollar {
    position: absolute;
    bottom: 10px;
    color: rgba(113, 59, 219, 1);
    font-size: 25px;
    padding: 3px;
  }
`;
const SimilarContent = styled.div`
  .wrapper__ {
    display: flex;
    justify-content: space-between;
    p{
      position : relative;
      top : 15px;
    }
  }
`;

const Card = ({firstAmount, secondAmount, thirdAmount}) => {
  return (
    <Container>
      <Content>
        <FirstContent>
          <div>
            <p className='amount'>
              {firstAmount} <span className='dollar'>$</span>
            </p>
            <br /> <p className='total'>Total Value of Disbursement</p>
          </div>
        </FirstContent>

        <SimilarContent>
          <div className='wrapper__'>
            <p className='policy'>Policy</p>
            <p className='amount__'>
              {secondAmount}<span className='dollar__'>$</span>
            </p>
          </div>
          <div className='progress'>
            <div className='progress__policy__bar'></div>
          </div>
        </SimilarContent>
        <SimilarContent>
          <div className='wrapper__'>
            <p className='claim'>Claim</p>
            <p className='amount__'>
              {thirdAmount}
              <span className='dollar__'>$</span>
            </p>
          </div>
          <div className='progress'>
            <div className='progress__claim__bar'></div>
          </div>
        </SimilarContent>
      </Content>
    </Container>
  );
};

export default Card;
