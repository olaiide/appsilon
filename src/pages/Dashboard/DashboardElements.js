import styled from "styled-components";

export const Container = styled.div`
  margin-left: 25%;
  overflow: hidden;
  @media screen and (max-width : 768px){
    margin-left: 0% ;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow : hidden;
  background-color : #f4f5f9;
  min-height : 100vh;
`;
export const ContentWrapper = styled.div`
width : 80%;
margin-left : 2rem;
@media screen and (max-width: 768px) {
  width : 90%;
  margin : 0 auto;
}
`
export const Hero = styled.div`
  margin-top : 1rem;
  height : 300px;
  padding-bottom : 3rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`
export const CardGrid = styled.div`
display : grid;
grid-template-columns : repeat(auto-fit, minmax(230px, 1fr));
gap : 12px;
margin-top : 1rem;
`