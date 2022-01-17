import '@testing-library/jest-native/extend-expect';
import './fetch-polyfill';
import { server } from '~/mocks/server';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  jest.restoreAllMocks();
  server.close();
});
