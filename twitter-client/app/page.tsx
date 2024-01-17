import React from 'react';
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notification',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
];
export default function Home() {
  return (
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3 pt-8 '>
        <div className='text-3xl h-fit w-fit hover:bg-slate-600 rounded-full p-4 cursor-pointer mt-1 transition-all ease-in'>
          <BsTwitter />
        </div>
        <div className='mt-4 text-2xl pr-4'>
          <ul>
            {sidebarMenuItems.map((item) => (
              <li
                className='flex justify-start items-center gap-2 hover:bg-slate-600 rounded-full w-fit px-4 py-2 !cursor-pointer transition-all ease-in mt-5'
                key={item.title}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className='mt-2 text-lg cursor-pointer hover:bg-sky-400 bg-[#1d9bf0] text-white px-4 py-2 w-full rounded-full '>
            Tweet
          </button>
        </div>
      </div>
      <div className='col-span-6  border-x-[0.2px] border-x-slate-500'></div>
      <div className='col-span-3 '></div>
    </div>
  );
}
