import { rest } from 'msw';
import { ORIGIN } from '../../const';

export const handlers = [
  rest.post(`${ORIGIN}/login`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${ORIGIN}/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
