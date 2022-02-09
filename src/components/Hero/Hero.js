import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
      Hi, Welcome to my "little" resume. 
      </SectionTitle>
      <SectionText>
      It is still to little but you can contact me to talk about my abilities and make a technical test
        </SectionText>
        <Button ><a href="https://cv-jacob-arguelles.herokuapp.com/" target='_blank' style={{color:'white', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', height:'100%', width:'100%'}}>
        Curriculum Vitae
          </a></Button>
    </LeftSection>
  </Section>
);

export default Hero;