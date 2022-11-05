import * as APIHandler from '../lib/APIHandler';

export async function getNewCard () {
  const resp = await APIHandler.call('GET', '/api/flashcard');
  return resp;
}

export async function addNewCard (data) {
  const resp = await APIHandler.call('POST', '/api/flashcard', data);
  return resp;
}
