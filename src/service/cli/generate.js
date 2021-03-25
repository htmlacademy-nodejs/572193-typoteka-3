'use strict';

const fs = require(`fs`);

const {
  shuffle,
  getRandomInt
} = require(`../../utils`);

const {
  MAX_ANNOUNCE_COUNT,
  DEFAULT_COUNT,
  FILE_MOCKS_NAME,
  ExitCode,
  MAX_PUBLICATION_COUNT,
} = require(`../../constants`);

const {
  TITLES,
  SENTENCES,
  CATEGORIES,
} = require(`../../data`);


const currentDate = new Date();

const createDatePublication = {
  minDate: currentDate.getTime(),
  maxDate: new Date(currentDate.setMonth(currentDate.getMonth() - 3))
};

const generatePublications = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    announce: shuffle(SENTENCES).slice(0, MAX_ANNOUNCE_COUNT).join(``),
    fullText: shuffle(SENTENCES).slice(0, getRandomInt(1, SENTENCES.length - 1)).join(``),
    createdDate: new Date(getRandomInt(createDatePublication.minDate, createDatePublication.maxDate)).toLocaleString(),
    сategory: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
  }))
);


module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const countPublications = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generatePublications(countPublications));

    if (countPublications > MAX_PUBLICATION_COUNT) {
      console.info(`Не больше 1000 объявлений.`);
      process.exit(ExitCode.ERROR);
    }

    fs.writeFile(FILE_MOCKS_NAME, content, (err) => {
      if (err) {
        return console.error(`Can't write data to file`);
      }
      return console.info(`Operation success.File created`);
    });
  }
};