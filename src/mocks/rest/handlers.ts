import { rest } from 'msw';
import { ORIGIN } from '../../const';

export const handlers = [
  rest.get(`${ORIGIN}/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
