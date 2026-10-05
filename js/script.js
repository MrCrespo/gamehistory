document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('gameForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const generation = document.getElementById('generation').value;
      const sales = document.getElementById('sales').value;
      const year = document.getElementById('year').value;
      const developer = document.getElementById('developer').value;
      const img = document.getElementById('img').value;

      const newGame = { id: Date.now(), title, generation, sales, year, developer, img };
      let customGames = JSON.parse(localStorage.getItem('custom_games')) || [];
      customGames.push(newGame);
      localStorage.setItem('custom_games', JSON.stringify(customGames));

      showToast('Jogo cadastrado com sucesso!');
      form.reset();
    });
  }
});

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}