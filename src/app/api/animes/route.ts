import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    releaseYear,
    episodesCount,
    status,
    summary,
    imageUrl,
    streamingPlatforms,
  } = body;

  try {
    const anime = await prisma.anime.create({
      data: {
        name,
        releaseYear,
        episodesCount,
        status,
        summary,
        imageUrl,
        streamingPlatforms,
      },
    });
    return NextResponse.json(anime, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar anime.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const animes = await prisma.anime.findMany();
    return NextResponse.json(animes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar animes.' },
      { status: 500 }
    );
  }
}
