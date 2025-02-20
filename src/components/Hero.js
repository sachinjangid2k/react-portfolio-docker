import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
`;

const AnimationContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>Satwik Kulshrestha</Title>
        <Subtitle>DevOps Engineer & Cloud Architect</Subtitle>
        <Description>
          With 10 years of experience in DevOps, cloud technologies, and automation,
          I help organizations build and scale their infrastructure efficiently.
        </Description>
      </Content>
      <AnimationContainer>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
          style={{ width: '100%', height: '100%' }}
        />
      </AnimationContainer>
    </HeroSection>
  );
};

export default Hero; 