import React from "react";
import logo from "../../assets/logo.svg";
import Picture from "../../assets/picture.svg";
import {
  SidebarContainer,
  Sidebar,
  Logo,
  Content,
  Button,
  ButtonWrapper,
  SideBarItems,
  SidebarList,
  SidebarLists,
} from "./SideBarElements";
import { SideBarData } from "./SideBarData";

const SideBar = () => {
  return (
    <SidebarContainer>
      <Sidebar>
        <Logo>
          <img src={logo} alt='logo' />
          <h3>Insurance Portal</h3>
        </Logo>
        <Content>
          <img src={Picture} alt='young woman' />
          <h3>Hello ! Rusalba Ruiz</h3>
          <p className='welcome'>Welcome Back To Your Insurance Portal</p>
          <p className='plan'>
            Your Plan : <span>Free</span>
          </p>
        </Content>
        <ButtonWrapper>
          <Button>Create New Plan +</Button>{" "}
        </ButtonWrapper>
        <SideBarItems>
          {SideBarData.map((item, index) => (
            <SidebarLists key={index} title={item.title}>
              <SidebarList>
                <div>
                  <img src={item.icon} alt='icon' />
                </div>
                <p>{item.title}</p>
              </SidebarList>
            </SidebarLists>
          ))}
        </SideBarItems>
      </Sidebar>
    </SidebarContainer>
  );
};

export default SideBar;
