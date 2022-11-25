import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

interface ExternalLinkProps {
  url: string;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-indigo-500 font-light rounded-md  hover:underline hover:underline-offset-8  flex items-center gap-1"
    >
      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
      {text}
    </Link>
  );
};

export default ExternalLink;
