import { z } from "zod";
import * as S from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

export type TMovieCreate = z.infer<typeof S.movieCreateSchema>;

export type TMovieReadAll = Array<Movie>;

export type TMovieUpdate = DeepPartial<TMovieCreate>;

export type TMovieEntityMovieRepo = Repository<Movie>;
