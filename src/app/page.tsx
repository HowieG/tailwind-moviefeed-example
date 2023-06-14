import Image from "next/image";
import Movies from "@/components/Movies";
import Movie from "@/components/Movie";

export default function Home() {
  const movies: Movie[] = [
    {
      id: "1",
      image: "movie1.jpg",
      title: "Movie 1",
      starRating: 4.5,
      rating: "PG-13",
      year: 2021,
      genre: "Action",
      runtime: "2h 15m",
      cast: "Actor 1, Actor 2",
    },
    {
      id: "2",
      image: "movie2.jpg",
      title: "Movie 2",
      starRating: 3.8,
      rating: "PG",
      year: 2020,
      genre: "Comedy",
      runtime: "1h 50m",
      cast: "Actor 3, Actor 4",
    },
    {
      id: "3",
      image: "movie3.jpg",
      title: "Movie 3",
      starRating: 4.2,
      rating: "R",
      year: 2019,
      genre: "Drama",
      runtime: "2h 30m",
      cast: "Actor 5, Actor 6",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <div className="bg-slate-800 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Movies movies={movies} />
      </div>
    </main>
  );
}
