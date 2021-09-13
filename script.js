const name = document.getElementById("name");
const height = document.getElementById("height");
const base = document.getElementById("base");
const image = document.getElementById("image");
const button = document
  .querySelector(".getRandomCharacter")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("CLICKED");
    const randomNumber = Math.ceil(Math.random() * 155);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then((response) => response.json())
      .then((character) => {
        name.innerHTML = character["name"];
        height.innerHTML = character["height"];
        base.innerHTML = character["base_experience"];
      });
  });
