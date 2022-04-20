import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 20%;
  min-height: 100vh;
  box-shadow: 10px 3px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  @media screen and (max-width: 768px) {
    left: ${(props) => (props.click ? "0" : "-110%")} !important;
    width: 250px !important;
    transition: ${(props) =>
      props.click ? " all 0.7s ease" : "all 0.7s ease"};
    overflow-x: auto;
    height: 100%;
    background-color: white;
  }
`;

export const Logo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  h3 {
    padding: 0 12px;
    font-family: Segoe UI;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: Segoe UI;
  height: 150px;
  img {
    position: relative;
  }
  h3 {
    font-family: Segoe UI;
    font-size: 15px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    color: #888cb7;
    margin-top: 0;
  }
  .welcome {
    font-family: Segoe UI;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    color: #888cb7;
    position: relative;
    bottom: 10px;
  }
  .plan {
    font-family: Segoe UI;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: #888cb7;
    position: relative;
    bottom: 15px;
    margin-top: 0;
  }
  span {
    color: rgba(51, 214, 159, 1);
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #713bdb;
  color: #fffbfb;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 7px;
  height: 32px;
  width: 148px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;
  padding-bottom: 1rem;
`;
export const SideBarItems = styled.div``;

export const SidebarList = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  cursor: pointer;
  .icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }
  .logout{
    flex: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    font-family: Segoe UI;
    font-weight: 400;
    font-size : 15px;
    letter-spacing: 0em;
    color: #a2a4b9;
  }
`;
export const Title = styled.p`
    flex: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    font-family: Segoe UI;
    font-weight: 400;
    letter-spacing: 0em;
    color: #a2a4b9;
    ${(props) =>
    props.title === "Reports" &&
    css`
      color: #713BDB !important;
    `}
`
export const Logout = styled.div`
  margin-top: 5.4rem;
  margin-left: 0.5rem;
`;
export const MobileTopBar = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: black;
    display: block;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 23px 13px 10px 13px;
    width: 92%;
  }
`;

export const MobileLogo = styled.div``;
