const apiKey = "caee7fe086e34c50b7ad0a28603fa3a6";
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const gamesContainer = document.querySelector(".games");
const loading = document.querySelector(".loading");

async function getGames() {
  try {
    //debugger;

    const response = await fetch(url + apiKey);

    loading.innerHTML = `<img src="./image/Bean Eater-1s-200px.gif"></img>`;

    const data = await response.json();

    const dataResponse = data.results;

    return dataResponse;
  } catch (error) {
    console.log("Error");
  }
}

async function listOfGames() {
  getGames()
    .then((data) => {
      loading.innerHTML = `<img></img>`;
      return data;
    })
    .then((data) => {
      for (let i = 0; i < 8; i++) {
        const gameName = data[i].name;
        const gameRating = data[i].rating;
        const gameTagsLength = data[i].tags.length;

        gamesContainer.innerHTML += `<div class="each-game"><h2>${gameName}</h2><h3>${gameRating}</h3><h4>${gameTagsLength}</h4></div>`;
      }
    });
}

listOfGames();
