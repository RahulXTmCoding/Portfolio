import { Row } from "antd";
import styled from "styled-components";
import Container from "./common/Container";
import SKill from "./common/Skill";
import Node from "../assest/node.png";
import Mongo from "../assest/mongodb.png";
import PostG from "../assest/pg.png";
import Heroku from "../assest/heroku.png";
import Express from "../assest/exjs.png";
import Redis from "../assest/redis.png";
import Docker from "../assest/docker1.png";
import Nginx from "../assest/nginx.png";
import Github from "../assest/github.png";
import SocketIo from "../assest/logo.svg";
import ReactJs from "../assest/react.png";
import HTML5 from "../assest/html5.png";
import CSS3 from "../assest/css3.png";
import SASS from "../assest/sass.png";
import Javascript from "../assest/javascript.png";
import Redux from "../assest/redux.png";
import RabbitMQ from "../assest/rabbitmq.png";
import WebRTC from "../assest/webrtc.png";
import Java from "../assest/java1.png";
import Python from "../assest/python1.png";
import TypeScript from "../assest/ts1.png";

const SKills = () => {
  return (
    <SKillsContainer id="skills">
      <Container>
        <StyledHeading className="wow slideInLeft animated">
          SKILLS
        </StyledHeading>
        <ProfileRow
          className="wow fadeInUp animated"
          data-wow-delay="500ms"
          data-wow-duration="1s"
        >
          <SKill skillName="NodeJS" image={Node} />
          <SKill skillName="ExpressJS" image={Express} />
          <SKill skillName="MongoDB" image={Mongo} />
          <SKill skillName="TypeScript" image={TypeScript} />
          <SKill skillName="ReactJs" image={ReactJs} />
          <SKill skillName="Redux" image={Redux} />
          <SKill skillName="Postgresql" image={PostG} />
          <SKill skillName="Heroku" image={Heroku} />
          <SKill skillName="Socket.io" image={SocketIo} />
          <SKill skillName="Redis" image={Redis} />
          <SKill skillName="Github" image={Github} />
          <SKill skillName="HTML5" image={HTML5} />
          <SKill skillName="CSS3" image={CSS3} />
          <SKill skillName="SASS" image={SASS} />
          <SKill skillName="React Native" image={ReactJs} />
          <SKill skillName="Javascript" image={Javascript} />
          <SKill skillName="Webrtc" image={WebRTC} />
          <SKill skillName="Java" image={Java} />
          <SKill skillName="Python" image={Python} />
          <SKill skillName="RabbitMQ" image={RabbitMQ} />
          <SKill skillName="Docker" image={Docker} />
          <SKill skillName="Nginx" image={Nginx} />
        </ProfileRow>
      </Container>
    </SKillsContainer>
  );
};

export default SKills;

const SKillsContainer = styled.div`
  padding: 10px 0 0 0;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: #333;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ProfileRow = styled(Row)`
  gap: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
