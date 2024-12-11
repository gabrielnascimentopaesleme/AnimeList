import React from 'react';
import LoginForm from './_components/login';

export default function Login({
  searchParams,
}: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return <LoginForm searchParams={searchParams} />;
}
