import React, {Fragment} from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import {
  Container,
  Wrapper,
  ContentWrapper,
  HeroWrapper,
  CardGrid,
} from "./DashboardElements";
import { Data } from "./DashboardData";
import Card from "../../components/Card/Card";
import insurance from "../../assets/header-image.png";
const Dashboard = () => {
  return (
    <Fragment>
      <SideBar />
      <Container>
        <Header />
        <Wrapper>
          <ContentWrapper>
            <HeroWrapper>
              <div className="image__wrapper">
              <img src={insurance} alt="insurance"/>
              </div>
              <div className="header__">
                <p>20% Safe On Your First Account</p>
                <div className="newbie__">
                  <div className="newbie">NEWBIE20</div>
                  <div className="code">Copy Code</div>
                </div>
              </div>
            </HeroWrapper>
            {
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
            }
          </ContentWrapper>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
