import * as APIHandler from '../lib/APIHandler';

export async function getNewCard () {
  const resp = await APIHandler.call('GET', '/api/flashcard');
  return resp;
}
