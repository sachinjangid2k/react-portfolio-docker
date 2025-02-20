import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.accent};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertCard = styled.div`
  background: ${props => props.theme.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CertName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const CertIssuer = styled.p`
  color: ${props => props.theme.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CertDate = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
`;

const Certifications = () => {
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <CertGrid>
        <CertCard>
          <CertName>AWS Solutions Architect Professional</CertName>
          <CertIssuer>Amazon Web Services</CertIssuer>
          <CertDate>2023</CertDate>
        </CertCard>

        <CertCard>
          <CertName>Google Cloud Professional DevOps Engineer</CertName>
          <CertIssuer>Google Cloud</CertIssuer>
          <CertDate>2022</CertDate>
        </CertCard>

        <CertCard>
          <CertName>Certified Kubernetes Administrator (CKA)</CertName>
          <CertIssuer>Cloud Native Computing Foundation</CertIssuer>
          <CertDate>2021</CertDate>
        </CertCard>

        <CertCard>
          <CertName>HashiCorp Certified Terraform Associate</CertName>
          <CertIssuer>HashiCorp</CertIssuer>
          <CertDate>2021</CertDate>
        </CertCard>
      </CertGrid>
    </Section>
  );
};

export default Certifications; 