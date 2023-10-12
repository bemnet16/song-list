import React from "react";
import styled from "@emotion/styled";
import { typography } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background-color: #2c7da0;
  color: white;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
  margin: 0;
  ${typography}
`;

const GitHubLink = styled.a`
  color: orange;
  text-decoration: none;
  font-size: 18px;
  line-height: 100%;
  margin: 0 8px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText fontSize={16}>
        &copy; {new Date().getFullYear()} Simple Song Lists App
      </FooterText>

      <FooterText fontSize={14}>
        by Bemnet Adugnaw
        <GitHubLink href="https://github.com/bemnet16">
          <FontAwesomeIcon icon={faGithub} />
        </GitHubLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
