import chalk from 'chalk';

/* eslint-disable no-console */

export const success = (message) => {
  console.log( chalk.greenBright(message) );
}

export const error = (message) => {
  console.log( chalk.redBright(message) );
}
