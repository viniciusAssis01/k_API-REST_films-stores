import { Router } from "express";
import * as M from "../middlewares";
import * as S from "../schemas";
import * as C from "../controllers";

export const moviesRouter: Router = Router();

moviesRouter.post(
  "",
  M.validateBody(S.movieCreateSchema),
  M.verifyMovieNamExists,
  C.createMovieController
);

moviesRouter.get("", M.pagination, C.retrieveMoviesController);

moviesRouter.patch(
  "/:id",
  M.validateBody(S.movieUpdateSchema),
  M.verifyIdMovieExists,
  M.verifyMovieNamExists,
  C.UpdateMovieController
);

moviesRouter.delete("/:id", M.verifyIdMovieExists, C.deleteMovieController);
