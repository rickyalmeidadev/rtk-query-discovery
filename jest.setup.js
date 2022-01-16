import '@testing-library/jest-native/extend-expect';
import AbortController from 'abort-controller';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { server } from '~/mocks/server';

global.AbortController = AbortController;
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const noop = () => {};

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(noop);
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  jest.restoreAllMocks();
  server.close();
});
