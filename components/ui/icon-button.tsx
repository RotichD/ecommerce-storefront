import { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className=' text-gray-600 rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition'
    >
      {icon}
    </button>
  );
};

export default IconButton;
