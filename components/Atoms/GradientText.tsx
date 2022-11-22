import React from 'react';

interface GradientTextProps {
  customStyles?: string;
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ customStyles, text }) => {
  return (
    <p
      className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ${customStyles}`}
    >
      {text}
    </p>
  );
};

export default GradientText;
