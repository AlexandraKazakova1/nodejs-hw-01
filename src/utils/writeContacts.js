import { writeFile } from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const jsonData = JSON.stringify(updatedContacts, null, 5);
  try {
    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка');
  }
};
