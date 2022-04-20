import styled from "styled-components";
import bg from "../../assets/bg.png";
export const Container = styled.div`
  margin-left: 20%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    margin-left: 0%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
  background-color: #f4f5f9;
  min-height: 100vh;
`;
export const ContentWrapper = styled.div`
  width: 90%;
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const HeroWrapper = styled.div`
  margin-top: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  background: url(${bg}) no-repeat center center/ cover;
  display: flex;
  align-items: center;
  width: 100%;
  .image__wrapper {
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    img {
      height: 0 auto;
      max-width: 100%;
      @media screen and (max-width: 768px) {
      }
    }
  }
  min-height: 22rem;
  .header__ {
    padding-right: 8rem;
    p {
      font-family: Segoe UI;
      font-size: 20px;
      font-size : 2rem;
      font-weight: 600;
      line-height: 44px;
      letter-spacing: 0em;
      color: #42474a;
      text-align: center;
      @media screen and (max-width:768px) {
        font-size : 1.5rem;
      }
      @media screen and (min-width : 960px) {
        white-space: nowrap;
      }
    }
    .newbie__ {
      text-align: center;
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 20px;
      .newbie {
        padding: 1px 12px;
        border: 1.6px dotted #42474a;
        border-radius: 3px;
        font-family: Segoe UI;
        font-size: 14px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        color: #42474a;
      }
      .code {
        margin-left: 9px;
        font-family: Segoe UI;
        font-size: 13px;
        font-weight: 600;
        line-height: 29px;
        letter-spacing: 0em;
        cursor: pointer;
        color: #42474a;
      }
    
    }
    @media screen and (max-width : 768px) {
        padding-right : 0;
      }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
  margin-top: 1rem;
`;
