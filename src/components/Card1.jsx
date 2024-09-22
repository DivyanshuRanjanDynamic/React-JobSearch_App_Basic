import React from 'react'

const Card = ({children,bg='bg-gray-100'}) => {
  return (
    <div className={` ${bg} rounded-lg p-6 shawdow-md`}>
        {children}
    </div>
  );
};

export default Card;
