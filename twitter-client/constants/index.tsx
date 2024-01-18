import { TwitterSidebarButton } from '@/types';
import React from 'react';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { RiGroupLine } from 'react-icons/ri';

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
    title: 'Lists',
    icon: <MdOutlineLibraryBooks />,
  },
  {
    title: 'Communities ',
    icon: <RiGroupLine />,
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
