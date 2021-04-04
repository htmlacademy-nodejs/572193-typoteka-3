'use strict';

const DEFAULT_COMMAND = `--help`;
const DEFAULT_COUNT = 1;
const USER_ARGV_INDEX = 2;
const MAX_ANNOUNCE_COUNT = 5;
const FILE_MOCKS_NAME = `mocks.json`;
const MAX_PUBLICATION_COUNT = 1000;
const ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const DEFAULT_PORT = 3000;
const DEFAULT_EXPRESS_PORT = 8080;
const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};
const PUBLIC_DIR = `public`;


module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_COUNT,
  USER_ARGV_INDEX,
  FILE_MOCKS_NAME,
  MAX_PUBLICATION_COUNT,
  ExitCode,
  MAX_ANNOUNCE_COUNT,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  DEFAULT_PORT,
  HttpCode,
  DEFAULT_EXPRESS_PORT,
  PUBLIC_DIR,
};
