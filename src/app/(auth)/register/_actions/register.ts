'use server'

import { hashSync } from "bcrypt-ts"
import { redirect } from "next/navigation"
import { prisma as db } from '@/prisma/prisma';

export default async function register(FormData: FormData) {
  const entries = Array.from(FormData.entries())

  const {name, email, password} = Object.fromEntries(entries) as {
    name: string,
    email: string,
    password: string
  }

  if (!email || !password || !name) {
    throw new Error("Todos os campos são obrigatórios.")
  }

  const userExists = await db.user.findUnique({
    where: {email}
  })

  if (userExists) {
    throw new Error("Já existe um usuário com este email.")
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password)
    }
  })

  redirect("/login")
}