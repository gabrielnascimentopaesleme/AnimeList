import Link from 'next/link';
import { signIn, providerMap } from 'auth';
import { AuthError } from 'next-auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import login from '../_actions/login';

export default function LoginForm(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return (
    <div className="h-screen flex items-center">
      <div className="rounded-md flex flex-col gap-8 mx-auto w-1/3 h-4/5 bg-slate-800 text-white py-8">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold mt-4">Login NextAuth</h1>
          </div>
        </div>
        <div>
          <form action={login} className="p-6 pt-0">
            <div className="flex flex-col gap-8 items-center ">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-base text-slate-950 p-1.5"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="password">
                  Senha
                </label>
                <input
                  className="text-base text-slate-950 p-1.5"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="flex justify-center p-6 pb-0">
              <button
                type="submit"
                className="text-xl px-10 py-2 rounded-lg text-slate-200 border bg-green-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className='text-center flex flex-col gap-3'>
            <p>Faça login com:</p>
            <div className="flex justify-center gap-6 ">
              {Object.values(providerMap).map((provider) => (
                <form
                  key={provider.id}
                  action={async () => {
                    'use server';
                    try {
                      await signIn(provider.id, {
                        redirectTo: props.searchParams?.callbackUrl ?? '',
                      });
                    } catch (error) {
                      if (error instanceof AuthError) {
                        throw new Error('Opa, ocorreu um erro inesperado!');
                      }
                      throw error;
                    }
                  }}
                >
                  <button className='text-2xl' type="submit">
                    {provider.name === 'Google'? (<FaGoogle/>) : (<FaGithub/>)} 
                  </button>
                </form>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 pt-0 flex justify-center gap-1">
          <p>Não possui conta?</p>
          <Link className="underline decoration-slate-50" href="/register">
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
