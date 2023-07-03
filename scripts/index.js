import { baseUrl, repositoriesQuantity } from "/scripts/variables.js";

import { getRepositories } from "/scripts/repositories.js";
import { getEvents } from "/scripts/events.js";

import { getUser } from "/scripts/user.js";

import { user } from "/scripts/objects/user.js";
import { screen } from "/scripts/objects/screen.js";

//Ação do botão
const btnSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;

    if (validateEmptyteInput(userName)) return; //Validação de Input
    getUserData(userName);
  });

// Buscar na tecla Enter
document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    getUserData(userName);
  }
});

//Validação de Input
function validateEmptyteInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o Nome do Usuario 💢");
    return true;
  }
}

async function getUserData(userName) {
  const userResponse = await getUser(userName);
  const repositoriesResponse = await getRepositories(userName);
  const eventsResponse = await getEvents(userName);

  console.log(eventsResponse);
  console.log(repositoriesResponse);

  if (validateEmptyteInput(userName)) return; //Validação de Input

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  user.setInfo(userResponse);

  user.setRepositories(repositoriesResponse);
  user.setEvents(eventsResponse);

  screen.renderUser(user);
}
