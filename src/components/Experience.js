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

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 2rem 0;
  padding-left: 2rem;
  border-left: 2px solid ${props => props.theme.primary};
  margin-left: 1rem;

  &:before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 2rem;
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme.primary};
    border-radius: 50%;
  }
`;

const Company = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
`;

const Role = styled.h4`
  color: ${props => props.theme.primary};
  margin: 0.5rem 0;
`;

const Description = styled.p`
  color: ${props => props.theme.secondary};
  margin-top: 1rem;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        <TimelineItem>
          <Company>Tech Solutions Inc.</Company>
          <Period>2020 - Present</Period>
          <Role>Senior DevOps Engineer</Role>
          <Description>
            Led a team of 5 DevOps engineers, implemented CI/CD pipelines reducing deployment time by 70%, 
            and managed cloud infrastructure on AWS serving 1M+ users.
          </Description>
        </TimelineItem>

        <TimelineItem>
          <Company>Cloud Systems Corp</Company>
          <Period>2017 - 2020</Period>
          <Role>Cloud Infrastructure Engineer</Role>
          <Description>
            Architected and maintained multi-cloud solutions, implemented Infrastructure as Code using 
            Terraform, and reduced infrastructure costs by 40%.
          </Description>
        </TimelineItem>

        <TimelineItem>
          <Company>DevOps Solutions Ltd</Company>
          <Period>2013 - 2017</Period>
          <Role>DevOps Engineer</Role>
          <Description>
            Established automated deployment processes, managed Kubernetes clusters, and implemented 
            monitoring solutions using Prometheus and Grafana.
          </Description>
        </TimelineItem>
      </Timeline>
    </Section>
  );
};

export default Experience; 