import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const dataOneNewContact = JSON.createFakeContact();

  try {
    await fs.appendFile(PATH_DB, dataOneNewContact, 'utf-8');
    console.log('Дані успішно додані до файлу.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error.message);
  }
};

addOneContact();
