import { Transition } from '@headlessui/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TranslateXProps {
  children: JSX.Element;
  customStyles?: string;
  duration?: number;
}

const TranslateX: React.FC<TranslateXProps> = ({ children, customStyles, duration }) => {
  const durationFallback = duration || 1000;

  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  });

  return (
    <div ref={ref} key={children.key} className={customStyles}>
      <Transition
        show={inView}
        enter={`transition duration-${durationFallback}`}
        enterFrom="opacity-0 translate-y-48"
        enterTo="opacity-100 translate-y-0"
      >
        {children}
      </Transition>
    </div>
  );
};

export default TranslateX;
