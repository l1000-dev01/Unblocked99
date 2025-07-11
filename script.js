document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  const games = [
    { title: "Chicken Jockey Clicker", url: "https://chicken-jockey-clicker.com", img: "game1.png", category: "Clicker" },
    { title: "Drift Hunters", url: "https://www.180sx.club/drift-hunters/", img: "game2.png", category: "Driving" },
    { title: "Worlds Hardest Game", url: "https://unblocked-games.s3.amazonaws.com/worlds-hardest-game.html", img: "game3.png", category: "Puzzle" },
    { title: "Geometry Dash", url: "https://sites.google.com/view/unblocked-games-76-new/geometry-dash", img: "game4.png", category: "2D" },
    { title: "World Guessr", url: "https://www.worldguessr.com/", img: "game5.png", category: "Puzzle" },
    { title: "Conrads Clicker", url: "https://l1000-dev.github.io/Conrad-s-Clicker/", img: "game6.png", category: "Clicker" },
    { title: "Slope 3D", url: "https://slopeonline.online/slope-game", img: "game7.png", category: "3D" },
    { title: "Brainrot Clicker", url: "https://slopeonline.online/italian-brainrot-clicker-2", img: "game8.png", category: "Clicker" },
  ];

  const gamesSection = document.querySelector(".games");

  function renderGames(category) {
    gamesSection.innerHTML = "";
    const filtered = category === "All" ? games : games.filter(g => g.category === category);
    filtered.forEach(game => {
      const div = document.createElement("div");
      div.className = "game-card";
      div.innerHTML = `<img src="${game.img}" alt=""><h3>${game.title}</h3>`;
      div.onclick = () => window.open(game.url, "_blank");
      gamesSection.appendChild(div);
    });
  }

  renderGames("All");

  document.querySelectorAll('#sidebar li').forEach(li => {
    li.addEventListener('click', () => renderGames(li.dataset.category));
  });
});
