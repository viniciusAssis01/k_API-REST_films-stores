import { Request, Response } from "express";
import * as services from "../services";
import * as I from "../interfaces";
import { Movie } from "../entities";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await services.createMovieService(req.body);

  return res.status(201).json(movie);
};

export const retrieveMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pagination: I.IPagination = await services.retrieveMoviesService(
    res.locals.pagination
  );

  return res.status(200).json(pagination);
};

export const UpdateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: I.TMovieUpdate = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await services.UpdateMovieService(foundMovie, payload);

  return res.status(200).json(movie);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const foundMovie: Movie = res.locals.movie;
  await services.deleteMovieService(foundMovie);
  return res.status(204).json();
};
