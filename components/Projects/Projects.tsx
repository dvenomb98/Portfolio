import React from 'react';
import TranslateY from '../Animations/TranslateY';
import Background from '../Layouts/Background';
import Container from '../Layouts/Container';
import ProjectCard from './ProjectCard';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <Background>
      <Container>
        <div className="flex flex-col gap-40">
          <div>
            <TranslateY duration={500}>
              <h1 className="text-headline font-semibold mb-10">What i have been working on</h1>
            </TranslateY>
            <TranslateY duration={1000}>
              <p className="font-light descriptionText">
                I learned most of my knowlegde by working on projects. Take a look at some of the
                work I have dedicated my time to.
              </p>
            </TranslateY>
          </div>

          <div className="flex flex-col gap-40">
            {ProjectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Projects;
