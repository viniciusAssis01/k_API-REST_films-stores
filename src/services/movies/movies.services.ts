import { Movie } from "../../entities/";
import { AppDataSource } from "../../data-source";
import * as I from "../../interfaces";

export const createMovieService = async (
  payload: I.TMovieCreate
): Promise<Movie> => {
  const entityRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  const movie: Movie = await entityRepo.save(payload);

  return movie;
};

export const retrieveMoviesService = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: I.IPaginationParams): Promise<I.IPagination> => {
  const entityRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  const [movies, count]: [Movie[], number] = await entityRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

export const UpdateMovieService = async (
  movie: Movie,
  payload: I.TMovieUpdate
): Promise<Movie> => {
  const entityRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  return await entityRepo.save({ ...movie, ...payload });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  const entityRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  await entityRepo.remove(movie);
};
