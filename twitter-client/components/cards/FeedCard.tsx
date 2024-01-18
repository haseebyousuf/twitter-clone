import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
  return (
    <div className='border-t-[0.3px] border-gray-600 py-3 px-6   transition-all ease-in-out cursor-pointer'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1'>
          <Image
            className='rounded-full'
            src='https://avatars.githubusercontent.com/u/31572317?v=4'
            alt='profile'
            height={50}
            width={50}
          />
        </div>
        <div className='col-span-11'>
          <h5>Haseeb Yousuf</h5>
          <p>
            Week 4 - 6 assignments done!. Diving into the frontend was a
            fantastic refresher on key concepts Check out the repository below.
          </p>
          <div className='flex justify-between mt-5 text-xl mr-6'>
            <div className='hover:bg-sky-300/40 hover:text-blue-500 p-2 rounded-full cursor-pointer transition-all ease-in'>
              <BiMessageRounded />
            </div>
            <div className='hover:bg-green-300/40 hover:text-green-500 p-2 rounded-full cursor-pointer transition-all ease-in'>
              <FaRetweet />
            </div>
            <div className='hover:bg-pink-400/40 hover:text-red-500 p-2 rounded-full cursor-pointer transition-all ease-in'>
              <AiOutlineHeart />
            </div>

            <div className=' p-2 rounded-full hover:bg-sky-300/40 hover:text-blue-500 cursor-pointer transition-all ease-in'>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
// how to set background color opacity in tailwindcss:
// https://tailwindcss.com/docs/background-opacity
//show me
