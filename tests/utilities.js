import {resolve} from 'path';

export function fixtureFile(fixture) {
  return resolve(__dirname, 'fixtures', fixture);
}
