import { NextFunction, Request, Response } from "express";
import * as I from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const verifyIdMovieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieId: number = Number(req.params.id);

  const entityMovieRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  const movie: Movie | null = await entityMovieRepo.findOneBy({ id: movieId });

  if (!movie) throw new AppError("Movie not found", 404);

  res.locals = { ...res.locals, movie };

  return next();
};
