import express from "express";
const app = express();

let allPokemon = [
  { name: "Pikachu", colour: "yellow" },
  { name: "Charmander", colour: "orange" },
  { name: "Squirtle", colour: "blue" },
];

app.get("/api/pokemon", (request, response) => {
  const queryStringColour = request.query.colour;
  console.log("Query string", request.query);

  if (queryStringColour) {
    allPokemon = allPokemon.filter(function (pokemon) {
      return pokemon.colour === queryStringColour;
    });
  }
  response.json(allPokemon);
});

app.listen(3000, () => console.log("Server is listening"));
