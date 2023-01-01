import { setupServer } from 'msw/node';
import { handlers as resetHandlers } from './rest/handlers';
import { handlers as graphqlHandler } from './graphql/handlers';

export const server = setupServer(...resetHandlers, ...graphqlHandler);
