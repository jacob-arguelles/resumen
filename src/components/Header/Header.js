import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href='/'>
          <a className='logo' style={{ display: "flex", alignItems: 'center', color: 'white', borderRadius:'0px' }}>
            <img src='/autoprint-150x150.svg' style={{ width: '3.5rem', marginRight: '1rem', filter: 'invert(100%)' }} /> <span style={{ fontFamily: 'Roboto Slab', fontSize:'1.6rem' }}>Jacob Israel</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects'>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/jisrael/" target='_blank'>
          <AiFillLinkedin style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='2rem'/>
        </SocialIcons>
        <SocialIcons>
          <AiFillInstagram style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='2rem'/>
        </SocialIcons>
        <SocialIcons href="https://wa.me/+584126754878" target='_blank'>
          <IoLogoWhatsapp style={{display:'flex',justifyContent:'center', alignContent:'center'}} size='2rem'/>
        </SocialIcons>
      </Div3>
    </Container>
  )
};

export default Header;
