import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const readContacts = async () => {
  const fileData = readFile(PATH_DB);
  return JSON.parse(fileData);
};
