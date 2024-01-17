import { TwitterSidebarButton } from '@/types';
import React from 'react';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
// interface TwitterSidebarButton {
//   title: string;
//   icon: React.ReactNode;
// }
export const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle className='font-bold' />,
  },
  {
    title: 'Explore',
    icon: <CiSearch />,
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
