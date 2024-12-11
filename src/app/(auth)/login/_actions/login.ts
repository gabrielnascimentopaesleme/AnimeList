'use server';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { signIn } from 'auth';

export default async function login(FormData: FormData) {
  const entries = Array.from(FormData.entries());
  const { email, password } = Object.fromEntries(entries) as {
    email: string;
    password: string;
  };
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false
    });
    redirect('/');
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        throw new Error('Credenciais inválidas');
      }
      if (error.type === 'CallbackRouteError') {
        throw new Error('Ocorreu um erro ao validar as informações.');
      }
    }
    throw error;
  }
}

