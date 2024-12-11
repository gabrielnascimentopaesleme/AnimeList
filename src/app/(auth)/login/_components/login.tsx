import Link from 'next/link';
import { signIn, providerMap } from 'auth';
import { AuthError } from 'next-auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import login from '../_actions/login';

export default function LoginForm(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return (
    <div className="bg-[rgb(34,34,34)] h-screen flex items-center">
      <div className="rounded-md flex flex-col  gap-8 mx-auto w-1/4 h-4/5  text-white py-8">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-3xl font-bold mt-4">
              <span className='text-[#FAD363]'>Faça Login</span><br />
              Na Animoteca
            </h2>
          </div>
        <div>
          <form action={login} className="pt-2 mb-4">
            <div className="flex flex-col gap-8">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-xl text-slate-950 p-1.5 rounded-lg"
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
                  className="text-xl text-slate-950 p-1.5 rounded-lg"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-xl px-10 font-bold py-2 rounded-full text-slate-100 border bg-[#EE8C04]"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex text-center flex-col gap-3">
            <div className="relative inline-block">
              <span className="relative z-10 bg-[rgb(34,34,34)] px-2">
                Ou
              </span>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 z-9 transform -translate-y-1/2"></div>
            </div>
            <div className="flex justify-center gap-6 pt-4 ">
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
                  <button className="text-2xl" type="submit">
                    {provider.name === 'Google' ? <FaGoogle /> : <FaGithub />}
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

      <figure>
        <img src="/images/pngegg.png" alt="" />
      </figure>
    </div>
  );
}
