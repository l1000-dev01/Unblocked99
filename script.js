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
  { title: "Slope 3D", url: "https://slopeonline.online/slope-game", img: "game7.png" },
  { title: "Brainrot Clicker", url: "https://slopeonline.online/italian-brainrot-clicker-2", img: "game8.png" },
];

const gamesSection = document.querySelector(".games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.onclick = () => launchGame(game.url);

  card.innerHTML = 
    <img src="${game.img}" alt="${game.title}" loading="lazy" />
    <h3>${game.title}</h3>
  ;
  gamesSection.appendChild(card);
});
