import { NextFunction, Request, Response } from "express";
import * as I from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const verifyMovieNamExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const nameMovie: string = req.body.name;

  const entityMovieRepo: I.TMovieEntityMovieRepo =
    AppDataSource.getRepository(Movie);

  if (nameMovie) {
    const movie: Movie | null = await entityMovieRepo.findOneBy({
      name: nameMovie,
    });

    if (movie) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};
