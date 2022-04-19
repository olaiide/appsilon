import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 25%;
  min-height: 100vh;
  box-shadow: 10px 3px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 0;
`;

export const Logo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
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
    color: #888cb7;
  }
  .welcome {
    font-family: Segoe UI;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    color: #888cb7;
  }
  .plan {
    font-family: Segoe UI;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: #888cb7;
  }
  span {
    color: rgba(51, 214, 159, 1);
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
  margin-top: 1rem;
`;

export const SidebarList = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    padding: 2px 8px;
    text-align: center;
    font-family: Segoe UI;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    color: #a2a4b9;
  }
`;

export const SideBarItems = styled.div``;

export const SidebarLists = styled.div`
  margin: 0 auto;
`;
