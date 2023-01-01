import 'cross-fetch/polyfill';
import { rest } from 'msw';
import { ORIGIN } from '../../const';
import { CustomError, fetcher } from '../../fetcher';
import { server } from '../../mocks/server';

describe('fetcher', () => {
  describe('Get', () => {
    describe('Success', () => {
      test('200', async () => {
        const expectedValue = { username: 'admin' };

        const response = await fetcher({ url: `${ORIGIN}/user` });

        expect(response).toEqual(expectedValue);
      });

      test('200', async () => {
        const expectedValue = { title: 'A Game of Thrones' };

        server.use(
          rest.get(`${ORIGIN}/book/:bookId`, (_, res, ctx) => {
            return res(ctx.json(expectedValue));
          })
        );

        const response = await fetcher({ url: `${ORIGIN}/book/1` });

        expect(response).toEqual(expectedValue);
      });
    });

    describe('Fail', () => {
      test.each`
        status
        ${`401`}
        ${`403`}
        ${`500`}
      `('$status', async ({ status }) => {
        server.use(
          rest.get(`${ORIGIN}/book/:bookId`, (req, res, ctx) => {
            return res(ctx.status(status));
          })
        );
        await expect(fetcher({ url: `${ORIGIN}/book/1` })).rejects.toThrowError(
          new CustomError()
        );
      });
    });
  });
});
