import 'cross-fetch/polyfill';
import { graphql, rest } from 'msw';
import { ORIGIN } from '../../const';
import { CustomError, fetcher } from '../../fetcher';
import { server } from '../../mocks/server';

describe('fetcher', () => {
  describe('GetUserInfo', () => {
    test('200', async () => {
      const expectedValue = {
        user: {
          id: 0,
          name: 'name1',
        },
      };

      const reqBody = {
        query: `query GetUserInfo {
        user
      }`,
      };

      const response = await fetcher({
        url: `${ORIGIN}`,
        method: 'POST',
        reqBody,
      });

      expect(response.data).toEqual(expectedValue);
    });
  });

  describe('GetBookInfo', () => {
    describe('Success', () => {
      test('200', async () => {
        const expectedValue = {
          book: {
            id: 0,
            title: 'title1',
          },
        };

        const reqBody = {
          query: `query GetBookInfo {
          book
        }`,
        };

        server.use(
          graphql.query('GetBookInfo', (req, res, ctx) => {
            return res(ctx.data(expectedValue));
          })
        );

        const response = await fetcher({
          url: `${ORIGIN}`,
          method: 'POST',
          reqBody,
        });

        expect(response.data).toEqual(expectedValue);
      });
    });

    describe('Fail', () => {
      test.each`
        status
        ${`401`}
        ${`403`}
        ${`500`}
      `('$status', async ({ status }) => {
        const reqBody = {
          query: `query GetBookInfo {
          book
        }`,
        };

        server.use(
          graphql.query('GetBookInfo', (req, res, ctx) => {
            return res(ctx.status(status));
          })
        );

        await expect(
          fetcher({
            url: `${ORIGIN}`,
            method: 'POST',
            reqBody,
          })
        ).rejects.toThrowError(new CustomError());
      });
    });
  });
});
