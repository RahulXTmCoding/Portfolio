/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import Container from "./common/Container";
import { COLOR_THEME } from "./constants";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";

const Header = ({ scrolled }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <StyledHeader scrolled={scrolled}>
      <Container>
        <StyledRow>
          <StyledLogo>
            <a href="/#home">Rahul Singh</a>
          </StyledLogo>
          <StyledMenuRow>
            <a href="/#whatido">WHAT I DO</a>
            <a href="/#about">About</a>
            <a href="/#skills">Skills</a>
            <a href="/#resume">Experience</a>
            <a href="/#contact">Contact</a>
          </StyledMenuRow>
          <StyledMenuRow mobile>
            <MenuOutlined onClick={showDrawer} />
            <StyledDrawer title={null} onClose={onClose} visible={visible}>
              <a href="/#whatido" onClick={() => onClose()}>
                WHAT I DO
              </a>
              <a href="/#about" onClick={() => onClose()}>
                About
              </a>
              <a href="/#skills" onClick={() => onClose()}>
                Skills
              </a>
              <a href="/#resume" onClick={() => onClose()}>
                Experience
              </a>
              <a href="/#contact" onClick={() => onClose()}>
                Contact
              </a>
            </StyledDrawer>
          </StyledMenuRow>
        </StyledRow>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  opacity: 0.95;
  ${(props) => (props.scrolled ? `background-color:#151515;` : "")}

  & div {
    padding: 0px;

    @media (max-width: 1200px) {
      padding: 2px 8px;
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.span`
  a {
    font-family: Sofia;
    font-weight: 600;
    color: ${COLOR_THEME};
    font-size: 20px;
  }
`;

const StyledMenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  display: ${(props) => (props.mobile ? "none" : "flex")};

  svg {
    color: ${COLOR_THEME};
    width: 26px;
    height: 26px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    flex-direction: column;
    display: flex;
    background-color: #151515;
    padding-top: 60px;
  }
  .anticon-close {
    svg {
      color: ${COLOR_THEME};
    }
  }

  a {
    margin-bottom: 20px;
  }
`;
