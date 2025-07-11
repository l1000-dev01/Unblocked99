function launchGame(url) {
  window.open(url, '_blank');
}

const games = [
  { title: "Chicken Jockey Clicker", url: "https://chicken-jockey-clicker.com", img: "game1.png" },
  { title: "Drift Hunters", url: "https://www.180sx.club/drift-hunters/", img: "game2.png" },
  { title: "Worlds Hardest Game", url: "https://unblocked-games.s3.amazonaws.com/worlds-hardest-game.html", img: "game3.png" },
  { title: "Geometry Dash", url: "https://sites.google.com/view/unblocked-games-76-new/geometry-dash", img: "game4.png" },
  { title: "World Guessr", url: "https://www.worldguessr.com/", img: "game5.png" },
  { title: "Conrads Clicker", url: "https://l1000-dev.github.io/Conrad-s-Clicker/", img: "game6.png" },
];

// Optional: add test games dynamically
for (let i = 7; i <= 20; i++) {
  games.push({
    title: `Test Game ${i}`,
    url: "#",
    img: `https://via.placeholder.com/220x140?text=Game+${i}`
  });
}

const gamesSection = document.querySelector(".games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.onclick = () => launchGame(game.url);

  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}" loading="lazy" />
    <h3>${game.title}</h3>
  `;
  gamesSection.appendChild(card);
});
