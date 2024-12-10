import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, releaseYear, episodesCount, status, summary, streamingPlatforms } = req.body;

    try {
      const anime = await prisma.anime.create({
        data: {
          name,
          releaseYear,
          episodesCount,
          status,
          summary,
          streamingPlatforms,
        },
      });
      res.status(201).json(anime);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar anime' });
    }
  } else if (req.method === 'GET') {
    try {
      const animes = await prisma.anime.findMany();
      res.status(200).json(animes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar animes' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
