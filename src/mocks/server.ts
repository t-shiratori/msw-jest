// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers as resetHandlers } from './rest/handlers';
import { handlers as graphqlHandler } from './graphql/handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...resetHandlers, ...graphqlHandler);
