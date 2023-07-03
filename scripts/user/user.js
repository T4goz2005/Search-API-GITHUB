import { baseUrl } from '../variables.js';

async function getUser(userName) {
  const response = await fetch(`${baseUrl}/${userName}`); //buscando
  return await response.json(); //transformando em objeto
}

export { getUser }
