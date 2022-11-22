import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Background from '../Layouts/Background';
import Container from '../Layouts/Container';

const Banner = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Background>
      <Container>
        <div>
          <Transition
            appear={true}
            show={isShowing}
            enter="transition duration-1000"
            enterFrom="opacity-0 -translate-x-96"
            enterTo="opacity-100 translate-x-0"
          >
            <h1 className="text-banner font-bold tracking-tight">Front End Developer</h1>
          </Transition>
        </div>
      </Container>
    </Background>
  );
};

export default Banner;
