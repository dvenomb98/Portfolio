import { Transition } from '@headlessui/react';
import React from 'react';
import { ProjectsData } from './ProjectsData';
import { useInView } from 'react-intersection-observer';
import ExternalLink from '../Atoms/ExternalLink';
import TranslateX from '../Animations/TranslateX';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  project: ProjectsData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { img, url, description, name, github, id },
}) => {
  return (
    <div className={`flex flex-col md:flex-row-reverse md:items-center gap-5 md:gap-0`}>
      <ProjectImage img={img} name={name} />

      <div className="flex flex-col md:basis-2/3">
        <TranslateX customStyles="flex flex-col md:basis-2/3">
          <>
            <h2 className="text-headline  mb-5">{name}</h2>
            <p className="md:w-3/4 font-light descriptionText">{description}</p>
            <div className="flex gap-5 items-center mt-5">
              <ExternalLink text="Website" url={url} />
              {github && <ExternalLink text="Github " url={github} />}
            </div>
          </>
        </TranslateX>
      </div>
    </div>
  );
};

export default ProjectCard;
