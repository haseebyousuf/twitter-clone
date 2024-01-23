'use client';
import React, { useCallback } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
const RightSidebar = () => {
  const handleGoogleLogin = useCallback((cred: CredentialResponse) => {}, []);

  return (
    <div className='col-span-3 p-5'>
      <div className='p-5 bg-slate-950 rounded-lg'>
        <h1 className='my-2 text-2xl'>New to twitter?</h1>
        <GoogleLogin onSuccess={(cred) => console.log(cred)} />
      </div>
    </div>
  );
};

export default RightSidebar;
