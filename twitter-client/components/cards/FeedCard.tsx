import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
  return (
    <div className='border-t-[0.3px] border-gray-600 py-3 px-6  hover:bg-slate-900 transition-all ease-in-out cursor-pointer'>
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
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
