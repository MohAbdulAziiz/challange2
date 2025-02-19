// pages/index.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaShoppingCart, FaLaptopCode, FaTools } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

// Animasi untuk perubahan warna Navbar
const changeColor = keyframes`
  0% {
    background-color: #333;
  }
  50% {
    background-color: #1e90ff;
  }
  100% {
    background-color: #333;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${changeColor} 5s infinite;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  transition: color 0.3s;
  
  &:hover {
    color: #1e90ff;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin: 0 25px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #f1f1f1;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #1e90ff;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  list-style: none;
  padding: 15px;
  background-color: #333;
  position: absolute;
  top: 60px;
  right: 20px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
`;

const SectionTitle = styled.h1`
  font-size: 35px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  max-width: 900px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #1e90ff;
`;

const InfoContainer = styled.div`
  max-width: 600px;
  text-align: left;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
`;

const CardText = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`;

const ContactIcon = styled.a`
  font-size: 28px;
  color: #333;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1e90ff;
  }
`;
// Footer Section (Full Width, Sticky Bottom)
const FooterSection = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: auto;
`;

const FooterTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FooterText = styled.p`
  font-size: 16px;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.9;
`;

const ContactIconsFooter = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
`;

const ContactIconFooter = styled.a`
  font-size: 28px;
  color: #fff;
  transition: color 0.3s ease;
  &:hover {
    color: #1e90ff;
  }
`;

const FooterInfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  width: 100%;
  padding-top: 30px;
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 280px;
`;

const FooterInfoIcon = styled.div`
  font-size: 45px;
  margin-bottom: 10px;
  color: #1e90ff;
`;

const FooterInfoText = styled.p`
  font-size: 15px;
  max-width: 250px;
  opacity: 0.9;
`;

const FooterBottom = styled.div`
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 15px;
  width: 100%;
  opacity: 0.8;
`;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Header */}
      <Navbar>
        <Logo>LMS</Logo>
        <NavLinks>
          <NavLink><Link href="/about">About</Link></NavLink>
          <NavLink><Link href="/skills">Skills</Link></NavLink>
          <NavLink><Link href="/portfolio">Portfolio</Link></NavLink>
          <NavLink><Link href="/services">Services</Link></NavLink>
          <NavLink><Link href="/contact">Contact</Link></NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </Navbar>

      {/* Mobile Menu */}
      <MobileMenu show={isMenuOpen}>
        <NavLink><Link href="/about">About</Link></NavLink>
        <NavLink><Link href="/skills">Skills</Link></NavLink>
        <NavLink><Link href="/portfolio">Portfolio</Link></NavLink>
        <NavLink><Link href="/services">Services</Link></NavLink>
        <NavLink><Link href="/contact">Contact</Link></NavLink>
      </MobileMenu>

      {/* Content Sections */}
      <PageContent>
        <AboutSection id="about">
          <AboutImage src="/aziz.jpeg" alt="Your Photo" />
          <InfoContainer>
            <SectionTitle>About Me</SectionTitle>
            <SectionText>
              I am a passionate web developer with a focus on creating interactive and efficient user experiences. I specialize in full-stack development with expertise in React, Node.js, and other modern web technologies.
            </SectionText>
          </InfoContainer>
        </AboutSection>

        <CardContainer id="skills">
          <Card>
            <FaHtml5 size={40} color="#e34f26" />
            <CardTitle>HTML5</CardTitle>
            <CardText>Creating accessible, semantic, and SEO-friendly websites using the power of HTML5.</CardText>
          </Card>
          <Card>
            <FaCss3Alt size={40} color="#2965f1" />
            <CardTitle>CSS3</CardTitle>
            <CardText>Styling responsive websites with CSS3, including animations and modern layouts.</CardText>
          </Card>
          <Card>
            <FaReact size={40} color="#61dafb" />
            <CardTitle>React.js</CardTitle>
            <CardText>Building dynamic and responsive front-end applications using React and its ecosystem.</CardText>
          </Card>
          <Card>
            <FaNodeJs size={40} color="#8cc84b" />
            <CardTitle>Node.js</CardTitle>
            <CardText>Developing back-end applications with Node.js and Express for scalable APIs.</CardText>
          </Card>
        </CardContainer>

        <section id="portfolio">
          <SectionTitle>Portfolio</SectionTitle>
          <SectionText>
            Here are some of the projects I've worked on, showcasing my coding abilities and creativity.
          </SectionText>
          <CardContainer>
            <Card>
              <CardTitle>Project 1</CardTitle>
              <CardText>A dynamic web app built with React and Node.js.</CardText>
            </Card>
            <Card>
              <CardTitle>Project 2</CardTitle>
              <CardText>Custom e-commerce platform with integrated payment system.</CardText>
            </Card>
          </CardContainer>
        </section>

        <section id="services">
          <SectionTitle>Services</SectionTitle>
          <SectionText>
            I offer the following web development services:
          </SectionText>
          <ul>
            <li>Custom Website Development</li>
            <li>Web Application Development</li>
            <li>UI/UX Design</li>
            <li>Consultancy and Mentorship</li>
          </ul>
        </section>
      </PageContent>

      {/* Footer Section */}
      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <FooterText>
          Feel free to reach out for collaboration opportunities, inquiries, or just a friendly chat about technology!
        </FooterText>
        <ContactIconsFooter>
          <ContactIconFooter href="https://www.linkedin.com" target="_blank">
            <FaLinkedin />
          </ContactIconFooter>
          <ContactIconFooter href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </ContactIconFooter>
          <ContactIconFooter href="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </ContactIconFooter>
          <ContactIconFooter href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </ContactIconFooter>
        </ContactIconsFooter>

        {/* Additional Info in Footer */}
        <FooterInfoSection>
          <FooterInfoBox>
            <FooterInfoIcon>
              <FaShoppingCart color="#fff" size={40} />
            </FooterInfoIcon>
            <FooterInfoText>E-Commerce Solutions</FooterInfoText>
          </FooterInfoBox>
          <FooterInfoBox>
            <FooterInfoIcon>
              <FaLaptopCode color="#fff" size={40} />
            </FooterInfoIcon>
            <FooterInfoText>Custom Web Development</FooterInfoText>
          </FooterInfoBox>
          <FooterInfoBox>
            <FooterInfoIcon>
              <FaTools color="#fff" size={40} />
            </FooterInfoIcon>
            <FooterInfoText>UI/UX Design Services</FooterInfoText>
          </FooterInfoBox>
        </FooterInfoSection>
      </FooterSection>
    </div>
  );
}
