import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  //width : 15%;
  // margin-top : 3rem;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 25%;
  //max-width : 400px;
  min-height: 100vh;
  box-shadow: 10px 3px 15px rgba(0, 0, 0, 0.05);
  position : fixed;
  left : 0;
  top : 0;
`;

export const Logo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top : 3rem;
  h3 {
    padding: 0 12px;
    font-family: Segoe UI;
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: "Segoe UI";
  h3 {
    font-family: Segoe UI;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    color : #888CB7;
  }
  .welcome {
    font-family: Segoe UI;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    color : #888CB7;
  }
  .plan {
    font-family: Segoe UI;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color : #888CB7;
  }
  span {
      color : rgba(51, 214, 159, 1);
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #713bdb;
  color: #fffbfb;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 7px;
  height: 35px;
  width: 168px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top : 2rem;
`;

export const SideBarItems = styled.div`
  /* list-style: none;
  transition: width 0.5s;
  background-color: red;
  margin-top: 7rem; */
  /* width: 15%;
  transition: width 0.5s;
  min-height: 100vh;
  background-color: #fff;
  //position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  overflow: hidden;
  margin-top: 0rem; */
`
export const SidebarList = styled.div`
/* margin : 0 auto;
display : flex;
//justify-content : center;
background-color : green;
//padding : 20px;
width : 100% !important; */
flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
`

export const SidebarListIcon = styled.div`
/* display : flex;
justify-content : center;
flex-direction : column; */
flex: 30%;
  display: grid;
  place-items: center;
`

export const SidebarListTitle = styled.div`
/* display : flex;
justify-content : center;
flex-direction : column; */
flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 17px;
`