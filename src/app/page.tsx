import Header from './components/header';
import AnimeList from './components/AnimeList';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)] h-screen">
      
      <Header />

      <AnimeList />

    </div>
  );
}
