import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { sidebarMenuItems } from '@/constants';

const LeftSidebar = () => {
  return (
    <div className='col-span-3 pt-1  ml-16'>
      <div className='text-3xl h-fit w-fit hover:bg-slate-600 rounded-full p-4 cursor-pointer mt-1 transition-all ease-in'>
        <FaXTwitter />
      </div>
      <div className='mt-1 text-xl pr-4'>
        <ul>
          {sidebarMenuItems.map((item) => (
            <li
              className='flex justify-start items-center gap-3 hover:bg-slate-600 rounded-full w-fit px-4 py-2 cursor-pointer transition-all ease-in mt-2'
              key={item.title}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className='px-6 mt-4'>
          <button className=' text-lg font-bold cursor-pointer hover:bg-[rgb(26,140,216)] bg-[#1d9bf0] text-white px-4 py-2 w-full rounded-full '>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
