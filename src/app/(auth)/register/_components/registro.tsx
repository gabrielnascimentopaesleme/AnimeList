'use client';

import Link from 'next/link';
import register from '../_actions/register';

export default function RegisterForm() {
  return (
    <div className="h-screen flex items-center bg-[rgb(34,34,34)] gap-4">
      <div className="rounded-md flex flex-col gap-6 mx-auto w-1/4 h-4/5  text-white">
        <div>
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-bold mt-4">
              <span className="text-[#FAD363]">Inscreva-se agora</span>
              <br />
              Na Animoteca
            </h2>
          </div>
        </div>
        <div>
          <form action={register} className="pt-2 mb-4">
            <div className="flex flex-col gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-xl text-slate-200" htmlFor="name">
                  Nome
                </label>
                <input
                  className="text-xl text-slate-950 p-1.5 rounded-lg"
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
                Registrar
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 pt-0 flex justify-center gap-1">
          <p>Já possui conta?</p>
          <Link className="underline decoration-slate-50" href="/login">
            Faça Login
          </Link>
        </div>
      </div>
      <figure>
        <img src="/images/pngegg.png" alt="" />
      </figure>
    </div>
  );
}
