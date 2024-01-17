import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-cols-12 h-screen w-screen'>
      <div className='col-span-3'></div>
      <div className='col-span-6  border-x-[0.2px] border-x-slate-500'></div>
      <div className='col-span-3 '></div>
    </div>
  );
}
