'use client';
import React, { useEffect, useState } from 'react';
type Anime = {
  id: string;
  name: string;
  releaseYear: number;
  episodesCount: number;
  status: string;
  summary: string;
  imageUrl: string;
  streamingPlatforms: string[];
};

const AnimeList = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedAnimes = async () => {
      try {
        const response = await fetch('/api/animes');
        if (!response.ok) {
          throw new Error(`Falha na requisição: ${response.status}`);
        }
        const data = await response.json();
        setAnimes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedAnimes();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className=" w-full flex justify-center">
      <div className="flex-wrap w-11/12 text-center flex justify-center text-slate-200">
        {animes.map((anime) => (
          <div key={anime.id} className="flex w-2/5 h-94 m-2 bg-black">

            <div className="w-2/5 h-full bg-cover bg-left sm:bg-contain bg-no-repeat" style={{ backgroundImage: `url(${anime.imageUrl})` }}></div>

            <div className="flex flex-col p-4 gap-2 items-center text-center w-3/5 h-full">
              <h2 className="text-xl">{anime.name}</h2>
              <p>Ano de lançamento: {anime.releaseYear}</p>
              <section className="flex justify-evenly">
                <p>
                  Episódios: {anime.episodesCount} / {anime.status}
                </p>
              </section>
              <section>
                <h2 className="text-xl">Resumo</h2>
                <p className="text-left text-xs">{anime.summary}</p>
              </section>
              <section>
                <h3 className="mb-2">Plataformas de streaming</h3>
                <ul className="flex justify-evenly flex-row gap-2">
                  {anime.streamingPlatforms.map((platform) => (
                    <li className='text-sm' key={platform}>{platform}</li>
                  ))}
                </ul>
              </section>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;

