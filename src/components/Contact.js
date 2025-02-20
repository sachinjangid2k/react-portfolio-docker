import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const EmailButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${props => props.theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: white;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Get in Touch</Title>
      <ContactContainer>
        <ContactText>
          I'm always interested in hearing about new opportunities and challenges
          in the DevOps space.
        </ContactText>
        <SocialLinks>
          <SocialLink href="https://github.com/satwikkulshrestha" target="_blank">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/satwikkulshrestha" target="_blank">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href="https://twitter.com/satwikkulshrestha" target="_blank">
            <i className="fab fa-twitter"></i>
          </SocialLink>
        </SocialLinks>
        <EmailButton href="mailto:contact@satwikkulshrestha.com">
          Send me an email
        </EmailButton>
      </ContactContainer>
    </Section>
  );
};

export default Contact; 