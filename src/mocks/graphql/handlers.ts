import { graphql } from 'msw';

export const handlers = [
  graphql.query('GetUserInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          id: 0,
          name: 'name1',
        },
      })
    );
  }),
];
