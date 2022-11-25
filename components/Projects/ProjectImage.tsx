import { Transition } from '@headlessui/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ProjectImageProps {
  img: string;
  name: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ img, name }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  });

  return (
    <div ref={ref} key={name} className="md:basis-1/2">
      <Transition
        show={inView}
        enter="transition-all duration-1000"
        enterFrom="opacity-0 rotate-[30deg]"
        enterTo="opacity-100 rotate-0"
      >
        <img src={img} alt={name} loading="lazy" className="w-full h-full object-cover" />
      </Transition>
    </div>
  );
};

export default ProjectImage;
