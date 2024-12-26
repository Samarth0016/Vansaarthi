import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode; // Defines the type for children (any valid React node)
  backgroundColor: string; // The class name for the background color
  textColor: string; // The class name for the text color
}

const Card: React.FC<CardProps> = ({ children, backgroundColor, textColor }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-auto">
        <div className="absolute top-0 left-0 w-full h-full bg-black translate-x-1 translate-y-1" />
        <div
          className={`relative ${backgroundColor} border-[3px] border-black hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 cursor-pointer w-full`}
        >
          <div className="flex flex-col">
            <div className={`${textColor} break-words w-full`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
