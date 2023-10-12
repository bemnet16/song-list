import React from "react";
import styled from "@emotion/styled";
import { typography, color } from "styled-system";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  ${typography}
  ${color}
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  ${typography}
  ${color}
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title fontSize={4} color="#333">
        About Me
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        consectetur sem. Vestibulum nec felis quam. In hac habitasse platea
        dictumst.
      </Paragraph>
      <Paragraph>
        Nullam tristique nec mauris eu laoreet. Sed ut ligula vel massa vehicula
        auctor. Vivamus quis nisl in sapien volutpat vehicula. Sed in efficitur
        velit. Nullam nec erat in lectus elementum tristique a vel metus.
      </Paragraph>
      <Paragraph>
        Fusce at arcu eu urna bibendum vehicula eu eu elit. Pellentesque vel
        bibendum libero. Integer eget nisl vel justo auctor auctor. Sed ac velit
        odio. Nulla facilisi.
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutPage;
