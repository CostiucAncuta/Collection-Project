import { birdsOfEurope } from "./collection.js";
const cardContainer = document.getElementById("card-container");

birdsOfEurope.forEach((bird) => {
  const card = document.createElement("div");
  card.classList.add("card");

  //picture
  const birdImage = document.createElement("img");
  birdImage.src = bird.picture;
  birdImage.alt = `${bird.name} picture`;
  birdImage.classList.add("bird-image"); //add a class for styling

  //name
  const birdName = document.createElement("h2");
  birdName.textContent = bird.name;
  //scientific name
  const birdScientificName = document.createElement("h3");
  birdScientificName.textContent = bird.scientificName;

  //appearance
  const birdAppearance = document.createElement("p");
  birdAppearance.innerHTML = `<strong>Appearance: </strong> ${bird.appearance}`;
  //size
  const birdSize = document.createElement("p");
  birdSize.innerHTML = `<strong>Size:</strong> ${bird.size}`;
  //habitat
  const birdHabitat = document.createElement("p");
  birdHabitat.innerHTML = `<strong>Habitat:</strong> ${bird.habitat}`;
  //diet
  const birdDiet = document.createElement("p");
  birdDiet.innerHTML = `<strong>Diet:</strong> ${bird.diet}`;
  //behaviour
  const birdBehaviour = document.createElement("p");
  birdBehaviour.innerHTML = `<strong> Behaviour: </strong> ${bird.behavior}`;

  card.appendChild(birdImage);
  card.appendChild(birdName);
  card.appendChild(birdScientificName);
  card.appendChild(birdAppearance);
  card.appendChild(birdSize);
  card.appendChild(birdHabitat);
  card.appendChild(birdDiet);
  card.appendChild(birdBehaviour);
  card.addEventListener("mouseover", () => {
    card.classList.add("hovered");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("hovered");
  });

  cardContainer.appendChild(card);
});
