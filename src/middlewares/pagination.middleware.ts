import { Request, Response, NextFunction } from "express";

export const pagination = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);
  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const orderOptions: Array<string> = ["asc", "desc"];
  const sortOptions: Array<string> = ["duration", "price"];

  let order: string;
  let sort: string;

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }

  if (!querySort || !(queryOrder && orderOptions.includes(queryOrder))) {
    order = "asc";
  } else {
    order = queryOrder;
  }

  const page: number = queryPage && queryPage > 1 ? queryPage : 1;

  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

  const baseUrl: string = "http://localhost:3000/movies";

  const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;

  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  res.locals = {
    ...res.locals,
    pagination: {
      page: perPage * (page - 1),
      perPage,
      order,
      sort,
      prevPage,
      nextPage,
    },
  };

  return next();
};
