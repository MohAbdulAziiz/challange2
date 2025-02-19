// pages/index.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <Navbar>
        <Logo>LMS</Logo>
        <NavLinks>
          <NavLink><Link href="/#about">About</Link></NavLink>
          <NavLink><Link href="/#skills">Skills</Link></NavLink>
          <NavLink><Link href="/#portfolio">Portfolio</Link></NavLink>
          <NavLink><Link href="/#services">Services</Link></NavLink>
          <NavLink><Link href="/#contact">Contact</Link></NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </Navbar>

      {/* Mobile Menu */}
      <MobileMenu show={isMenuOpen}>
        <NavLink><Link href="/#about">About</Link></NavLink>
        <NavLink><Link href="/#skills">Skills</Link></NavLink>
        <NavLink><Link href="/#portfolio">Portfolio</Link></NavLink>
        <NavLink><Link href="/#services">Services</Link></NavLink>
        <NavLink><Link href="/#contact">Contact</Link></NavLink>
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
          {/* Example portfolio items */}
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

        <section id="contact">
          <SectionTitle>Contact</SectionTitle>
          <SectionText>
            Feel free to reach out for collaboration opportunities, inquiries, or just a friendly chat about technology!
          </SectionText>
          <ContactIcons>
            <ContactIcon href="https://www.linkedin.com" target="_blank">
              <FaLinkedin />
            </ContactIcon>
            <ContactIcon href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </ContactIcon>
            <ContactIcon href="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </ContactIcon>
            <ContactIcon href="https://www.twitter.com" target="_blank">
              <FaTwitter />
            </ContactIcon>
          </ContactIcons>
        </section>
      </PageContent>
    </div>
  );
}
