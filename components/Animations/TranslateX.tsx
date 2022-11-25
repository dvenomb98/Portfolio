import { Transition } from '@headlessui/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TranslateXProps {
  children: JSX.Element;
  customStyles?: string;
}

const TranslateX: React.FC<TranslateXProps> = ({ children, customStyles }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  });

  return (
    <div ref={ref} key={children.key} className={customStyles}>
      <Transition
        show={inView}
        enter="transition duration-1000"
        enterFrom="opacity-0 -translate-x-96"
        enterTo="opacity-100 translate-x-0"
      >
        {children}
      </Transition>
    </div>
  );
};

export default TranslateX;
