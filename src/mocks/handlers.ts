// src/mocks/handlers.js
import { rest } from 'msw';

export const ORIGIN = 'https://api.backend.dev';

export const handlers = [
  // NOT "/user", nothing to be relative to!
  rest.post(`${ORIGIN}/login`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // NOT "/user", nothing to be relative to!
  rest.get(`${ORIGIN}/user`, (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
