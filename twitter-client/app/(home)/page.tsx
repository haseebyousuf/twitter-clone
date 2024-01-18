import FeedCard from '@/components/cards/FeedCard';
import React from 'react';

export default function Home() {
  return (
    <div className='w-full h-screen overflow-scroll '>
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}
