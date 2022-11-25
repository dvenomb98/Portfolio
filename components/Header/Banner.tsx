import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import GradientText from '../Atoms/GradientText';
import Background from '../Layouts/Background';
import Container from '../Layouts/Container';
import { useTheme } from 'next-themes';

const textMargin = 'my-5';

const Banner = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Background
      customStyles={`bg-no-repeat bg-left bg-contain ${
        theme === 'dark' ? 'bg-banner-texture' : 'bg-banner-texture-light'
      }`}
    >
      <Container customStyles="h-[900px] flex flex-col justify-center">
        <Transition show={isShowing}>
          <Transition.Child
            enter="transition duration-500"
            enterFrom="opacity-0 translate-y-48"
            enterTo="opacity-100 translate-y-0"
          >
            <p className={`${textMargin} font-semibold text-lg`}>Hi, my name is</p>
          </Transition.Child>

          <Transition.Child
            enter="transition duration-700"
            enterFrom="opacity-0 translate-y-48"
            enterTo="opacity-100 translate-y-0"
          >
            <h2
              className={`${textMargin} text-h1 md:text-headline w-72 font-semibold tracking-tight`}
            >
              Daniel Bílek
            </h2>
          </Transition.Child>

          <Transition.Child
            enter="transition duration-1000"
            enterFrom="opacity-0 translate-y-48"
            enterTo="opacity-100 translate-y-0"
          >
            <GradientText
              text="I'm creating beautiful digital user experiences"
              customStyles={`w-[20rem] md:w-[40rem] text-headline md:text-banner font-semibold ${textMargin}`}
            />
          </Transition.Child>
        </Transition>
      </Container>
    </Background>
  );
};

export default Banner;
