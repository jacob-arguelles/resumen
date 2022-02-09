import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+584126754878">+58 412-675-4878</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jisraelarguelles@gmail.com">
          jisraelarguelles@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>If there is no struggle, there is no progress</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.linkedin.com/in/jisrael/" target='_blank'>
          <AiFillLinkedin style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='3rem'/>
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='3rem'/>
        </SocialIcons>
        <SocialIcons href="https://wa.me/+584126754878" target='_blank'>
          <IoLogoWhatsapp style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='3rem'/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
