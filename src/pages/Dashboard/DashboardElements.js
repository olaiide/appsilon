import styled from "styled-components";

export const Container = styled.div`
 // min-height: 100vh;
  //background-color: #F4F5F9;
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
width : 92%;
//background-color : red;
margin : 0 auto;

`
export const CardGrid = styled.div`
display : grid;
grid-template-columns : repeat(auto-fit, minmax(250px, 1fr));
column-gap : 20px;
row-gap : 30px;
`