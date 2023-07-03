import { baseUrl, repositoriesQuantity } from "/scripts/variables.js";

async function getRepositories(userName) {
    const response = await fetch(
      `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
    ); //buscando
    
    
    return await response.json(); //transformando em objeto
  }

  export { getRepositories }
