'use client';
import React, { useCallback } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { graphqlClient } from '@/clients/api';
import { verifyGoogleTokenQuery } from '@/graphql/query/user';
const RightSidebar = () => {
  const handleGoogleLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error('Google Token not found');

    const { verifyGoogleToken } = await graphqlClient.request(
      verifyGoogleTokenQuery,
      {
        token: googleToken,
      }
    );
    toast.success('Verified Successfully');
    if (verifyGoogleToken) {
      window.localStorage.setItem('__twitter_token', verifyGoogleToken);
    }
  }, []);

  return (
    <div className='col-span-3 p-5'>
      <div className='p-5 bg-slate-950 rounded-lg'>
        <h1 className='my-2 text-2xl'>New to twitter?</h1>
        <GoogleLogin onSuccess={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default RightSidebar;
