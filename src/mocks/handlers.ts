// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // NOT "/user", nothing to be relative to!
  rest.post('https://api.backend.dev/login', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // NOT "/user", nothing to be relative to!
  rest.get('https://api.backend.dev/user', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
