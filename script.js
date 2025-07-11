function launchGame(url) {
  window.open(url, '_blank');
}

const categories = [
  "All",
  "Driving",
  "Shooter",
  "Clicker",
  "2 Player",
  "Puzzle",
  "2D",
  "3D"
];

const games = [
  { title: "Chicken Jockey Clicker", url: "https://chicken-jockey-clicker.com", img: "game1.png", categories: ["Clicker", "2D"] },
  { title: "Drift Hunters", url: "https://www.180sx.club/drift-hunters/", img: "game2.png", categories: ["Driving", "3D"] },
  { title: "Worlds Hardest Game", url: "https://unblocked-games.s3.amazonaws.com/worlds-hardest-game.html", img: "game3.png", categories: ["Puzzle", "2D"] },
  { title: "Geometry Dash", url: "https://sites.google.com/view/unblocked-games-76-new/geometry-dash", img: "game4.png", categories: ["2D", "Puzzle"] },
  { title: "World Guessr", url: "https://www.worldguessr.com/", img: "game5.png", categories: ["Puzzle"] },
  { title: "Conrads Clicker", url: "https://l1000-dev.github.io/Conrad-s-Clicker/", img: "game6.png", categories: ["Clicker", "2D"] },
  { title: "Slope 3D", url: "https://slopeonline.online/slope-game", img: "game7.png", categories: ["Driving", "3D"] },
  { title: "Brainrot Clicker", url: "https://slopeonline.online/italian-brainrot-clicker-2", img: "game8.png", categories: ["Clicker", "2D"] },
];

const gamesSection = document.querySelector(".games");
const categoryList = document.getElementById("category-list");

function renderGames(filteredGames) {
  gamesSection.innerHTML = "";
  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.onclick = () => launchGame(game.url);

    card.innerHTML = `
      <img src="${game.img}" alt="${game.title}" loading="lazy" />
      <h3>${game.title}</h3>
    `;
    gamesSection.appendChild(card);
  });
}

function renderCategories() {
  categories.forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;
    li.onclick = () => {
      if (cat === "All") {
        renderGames(games);
      } else {
        const filtered = games.filter(game => game.categories.includes(cat));
        renderGames(filtered);
      }
    };
    categoryList.appendChild(li);
  });
}

renderCategories();
renderGames(games);
