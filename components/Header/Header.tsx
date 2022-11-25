import useTheme from 'next-theme';
import React from 'react';
import Background from '../Layouts/Background';
import Container from '../Layouts/Container';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import Logo from '../Atoms/Logo';

const Header = () => {
  const { theme, setTheme } = useTheme();

  // const pagination = [
  //   {
  //     text: "Hello world",
  //     number: "01."
  //   },
  //   {
  //     text: "Projects",
  //     number: "02."
  //   },
  //   {
  //     text: "About me",
  //     number: "03."
  //   },
  //   {
  //     text: "Contact",
  //     number: "04."
  //   }
  // ]

  return (
    <Background>
      <Container customStyles="py-6">
        <div className="flex justify-between items-center">
          <Logo />

          {theme === 'dark' ? (
            <SunIcon
              onClick={() => setTheme('light')}
              className="w-7 h-7 cursor-pointer fill-white"
            />
          ) : (
            <MoonIcon
              onClick={() => setTheme('dark')}
              className="w-7 h-7 cursor-pointer fill-black"
            />
          )}
        </div>
      </Container>
    </Background>
  );
};

export default Header;
