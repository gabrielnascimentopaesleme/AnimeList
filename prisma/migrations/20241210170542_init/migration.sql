-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ANDAMENTO', 'ENCERRADO');

-- CreateEnum
CREATE TYPE "StreamingPlatforms" AS ENUM ('NETFLIX', 'CRUNCHYROLL', 'HIDIVE', 'AMAZON_PRIME', 'FUNIMATION', 'DISNEY_PLUS', 'YOUTUBE', 'OUTROS');

-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "episodesCount" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "summary" TEXT NOT NULL,
    "streamingPlatforms" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
