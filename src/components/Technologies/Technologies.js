
import React from 'react';
import { DiNodejsSmall,DiMongodb, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    {/* <SectionDivider /> */}
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end and Back-end
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='4rem'/>
          <ListContainer>
            <ListTitle>
              Front-End
            </ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size='4rem'/>
          <ListContainer>
            <ListTitle>
              Back-End
            </ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiMongodb size='4rem'/>
          <ListContainer>
            <ListTitle>
              Databases
            </ListTitle>
            <ListParagraph>
              Experience with <br />
              MongoDB
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
