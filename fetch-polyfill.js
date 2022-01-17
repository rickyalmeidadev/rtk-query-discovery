const AbortController = require('abort-controller');
const { fetch, Headers, Request, Response } = require('cross-fetch');

global.AbortController = AbortController;
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
