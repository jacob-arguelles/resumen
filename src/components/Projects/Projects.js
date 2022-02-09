import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    {/* <SectionDivider /> */}
    <SectionTitle main>
      My projects
    </SectionTitle>
    <GridContainer>
      {
        projects.map(project => (
          <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree title>
                {project.title}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>
                <TagList >
                  {project.tags.map((tag, i) =>(
                    <Tag className='my_tag' key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </TitleContent>
            </div>
            <UtilityList>
              {project.visit && <ExternalLinks className='ExternalLinks' target='_blank' href={project.visit}>
                    Visite
              </ExternalLinks>} 
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;