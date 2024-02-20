import { readFileSync, writeFileSync } from "fs";
import path from "path";

type UnparsedMovie = {
  year: number;
  title: string;
  info: {
    directors: string[];
    release_date: string;
    rating: number;
    genres: string[];
    image_url: string;
    plot: string;
    rank: number;
    running_time_secs: number;
    actors: string[];
  };
};

type Movie = {
  PK: string;
  SK: string;
  movieId: string;
  year: number;
  title: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  imageUrl: string;
  plot: string;
  rank: number;
  runningTimeSecs: number;
};

type Actor = {
  PK: string;
  SK: string;
  actorId: string;
  name: string;
};

type Director = {
  PK: string;
  SK: string;
  directorId: string;
  name: string;
};

export const generateSampleData = () => {
  const raw = readFileSync(path.join(__dirname + "/moviedata.json"));
  const unparsedMovies = (JSON.parse(raw.toString()) as UnparsedMovie[]).slice(
    0,
    100
  );

  const movies: Movie[] = [];
  const directors: Director[] = [];
  const actors: Actor[] = [];
  const masterFile = [];

  let moviesIndex = 0;
  let directorsIndex = 0;
  let actorsIndex = 0;
  const map: Record<string, number> = {};

  for (const movie of unparsedMovies) {
    moviesIndex++;
    const movieId = `m_${moviesIndex.toString().padStart(4, "0")}`;
    const movieRecord: Movie = {
      PK: `MOV#${movieId}`,
      SK: `MOV#`,
      movieId,
      year: movie.year,
      title: movie.title,
      releaseDate: movie.info.release_date,
      rating: movie.info.rating,
      genres: movie.info.genres,
      imageUrl: movie.info.image_url,
      plot: movie.info.plot,
      rank: movie.info.rank,
      runningTimeSecs: movie.info.running_time_secs,
    };
    movies.push(movieRecord);
    masterFile.push(movieRecord);

    for (const director of movie.info.directors ?? []) {
      let directorId = `d_${map[director]?.toString().padStart(4, "0")}`;
      if (!map[director]) {
        directorsIndex++;
        directorId = `d_${directorsIndex.toString().padStart(4, "0")}`;
        map[director] = directorsIndex;
      }
      const directorRecord: Director = {
        PK: `MOV#${movieId}`,
        SK: `DIR#${directorId}`,
        directorId,
        name: director,
      };
      directors.push(directorRecord);
      masterFile.push(directorRecord);
    }

    for (const actor of movie.info.actors ?? []) {
      let actorId = `a_${map[actor]?.toString().padStart(4, "0")}`;
      if (!map[actor]) {
        actorsIndex++;
        actorId = `a_${actorsIndex.toString().padStart(4, "0")}`;
        map[actor] = actorsIndex;
      }
      const actorRecord: Actor = {
        PK: `MOV#${movieId}`,
        SK: `ACT#${actorId}`,
        actorId,
        name: actor,
      };
      actors.push(actorRecord);
      masterFile.push(actorRecord);
    }
  }

  console.log(masterFile.slice(0, 10));
  console.log(`Saving ${masterFile.length} records`);
  writeFileSync(
    path.join(__dirname + "/dynamo_moviedata.json"),
    JSON.stringify(masterFile)
  );
};

generateSampleData();
