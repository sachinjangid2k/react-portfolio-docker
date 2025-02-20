import React from 'react';
import styled from 'styled-components';
import CloudIcon from '../assets/svg/CloudIcon';
import AutomationIcon from '../assets/svg/AutomationIcon';
import DevOpsIcon from '../assets/svg/DevOpsIcon';

const Section = styled.section`
  padding: 5rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  padding: 2rem;
  background: ${props => props.theme.accent};
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const SkillItem = styled.li`
  margin: 0.5rem 0;
  color: ${props => props.theme.secondary};
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <SkillsGrid>
        <SkillCard>
          <SkillTitle>
            <CloudIcon color="#2563eb" size={24} />
            Cloud Technologies
          </SkillTitle>
          <SkillList>
            <SkillItem>AWS</SkillItem>
            <SkillItem>Google Cloud Platform</SkillItem>
            <SkillItem>Azure</SkillItem>
            <SkillItem>Kubernetes</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard>
          <SkillTitle>
            <AutomationIcon color="#2563eb" size={24} />
            Automation
          </SkillTitle>
          <SkillList>
            <SkillItem>Jenkins</SkillItem>
            <SkillItem>GitLab CI/CD</SkillItem>
            <SkillItem>GitHub Actions</SkillItem>
            <SkillItem>Terraform</SkillItem>
          </SkillList>
        </SkillCard>

        <SkillCard>
          <SkillTitle>
            <DevOpsIcon color="#2563eb" size={24} />
            DevOps Practices
          </SkillTitle>
          <SkillList>
            <SkillItem>Infrastructure as Code</SkillItem>
            <SkillItem>Monitoring & Logging</SkillItem>
            <SkillItem>Security Best Practices</SkillItem>
            <SkillItem>Agile Methodologies</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </Section>
  );
};

export default Skills; 