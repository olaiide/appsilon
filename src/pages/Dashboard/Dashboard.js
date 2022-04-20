import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../Sidebar/SideBar";
import {
  Container,
  Wrapper,
  ContentWrapper,
  Hero,
  CardGrid,
} from "./DashboardElements";
import image1 from "../../assets/heroImage1.svg";
import { Data } from "./DashboardData";
import Card from "../../components/Card/Card";
const Dashboard = () => {
  return (
    <>
      <SideBar />
      <Container>
        <Header />
        <Wrapper>
          <ContentWrapper>
            <Hero>
             <img src={image1}  alt="img"/>
            </Hero>
            { <CardGrid>
              {Data.map((item) => (
                <Card
                  key={item.id}
                  firstAmount={item.firstAmount}
                  secondAmount={item.secondAmount}
                  thirdAmount={item.thirdAmount}
                />
              ))}
            </CardGrid> }
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
