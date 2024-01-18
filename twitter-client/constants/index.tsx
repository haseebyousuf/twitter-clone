import { TwitterSidebarButton } from '@/types';
import React from 'react';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { PiDotsThreeCircle } from 'react-icons/pi';
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
    title: 'Premium ',
    icon: <FaXTwitter />,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
  {
    title: 'More',
    icon: <PiDotsThreeCircle />,
  },
];
