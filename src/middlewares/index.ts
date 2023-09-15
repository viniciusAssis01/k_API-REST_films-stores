import { handleError } from "./handleErrors";
import { pagination } from "./pagination.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyIdMovieExists } from "./verifyIdMovieExists.middleware";
import { verifyMovieNamExists } from "./verifyMovieNameExists.middleware";

export {
  handleError,
  validateBody,
  verifyMovieNamExists,
  pagination,
  verifyIdMovieExists,
};
