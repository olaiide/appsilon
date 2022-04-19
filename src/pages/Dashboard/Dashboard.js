import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../Sidebar/SideBar";
import {
  Container,
  Wrapper,
  ContentWrapper,
  CardGrid,
} from "./DashboardElements";
import s from "../../assets/s.svg";
import Card from "../../components/Card/Card";
const Dashboard = () => {
  const Data = [
    {
        id : 1,
      firstAmount: "1000",
      secondAmount: "400",
      thirdAmount: "800",

    },
    {
        id : 1,
      firstAmount: "2500",
      secondAmount: "1100",
      thirdAmount: "1400",
    },
    {
        id : 3,
      firstAmount: "2500",
      secondAmount: "1100",
      thirdAmount: "1400",
    },
  ];
  return (
    <>
      <SideBar />
      <Container>
        <Header />
        <Wrapper>
          <ContentWrapper>
            <img
              src={s}
              style={{ height: "auto", maxWidth: "100%" }}
              alt='dd'
            />
            <CardGrid>
              {Data.map((item) => (
                <Card
                  key={item.id}
                  firstAmount={item.firstAmount}
                  secondAmount={item.secondAmount}
                  thirdAmount={item.thirdAmount}
                />
              ))}
            </CardGrid>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
