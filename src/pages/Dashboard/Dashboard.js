import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../Sidebar/SideBar";
import { Container, Wrapper, ContentWrapper } from "./DashboardElements";
import s from '../../assets/s.svg'
import Card from "../../components/Card/Card";
const Dashboard = () => {
  return (
    <>
      <SideBar />
      <Container>
          <Header />
        <Wrapper>
          {/* <Header /> */}
          <ContentWrapper>
            <img src={s} style={{height : 'auto', maxWidth : '100%'}}/>
            <Card />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
