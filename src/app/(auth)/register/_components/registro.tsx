'use client';

import Link from 'next/link';
import register from '../_actions/register';

export default function RegisterForm() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <div className="rounded-md flex flex-col gap-6 mx-auto w-1/3 h-4/5 bg-slate-800 text-white">
        <div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold mt-2">Cadastre-se</h1>
            <h2>Crie uma conta gratuitamente</h2>
          </div>
        </div>
        <div>
          <form action={register} className="px-6">
            <div className="flex flex-col gap-8 items-center ">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="name">
                  Nome
                </label>
                <input
                  className="text-base text-slate-950 p-1.5"
                  name="name"
                  type="name"
                  id="name"
                  placeholder="Fulano de Tal"
                />
              </div>
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
                Registrar
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 pt-0 flex justify-center gap-1">
        <p>Já possui conta?</p>
        <Link className='underline decoration-slate-50' href="/login">Faça Login</Link>
        </div>
      </div>
      <Link href="/">Voltar para Home</Link>
    </div>
  );
}
