# 🎮 GameHistory

**GameHistory** é uma enciclopédia web interativa de múltiplas páginas dedicada a documentar a evolução da indústria dos videogames através dos tempos. O projeto mapeia os jogos mais vendidos, dados de mercado e os maiores fenômenos comerciais da história, divididos cronologicamente por gerações de consoles, além de categorias exclusivas para computadores (PC), portáteis, jogos gratuitos (*Free-to-Play*), mercado *mobile* e o ranking histórico definitivo.

---

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estruturação semântica e limpa de todas as páginas do sistema.
* **CSS3**: Estilização personalizada, layout responsivo em grid, design system limpo e painel administrativo (CMS mockup).
* **JavaScript**: Manipulação e interações fundamentais da interface.

---

## 📂 Estrutura do Projeto

O site adota uma arquitetura modular baseada em páginas estáticas independentes interligadas por um menu de navegação global (`navbar`):

* `index.html` — Página inicial com o hub de navegação por gerações e categorias.
* `geracao2.html` — 1ª e 2ª Gerações (Magnavox Odyssey, Atari 2600).
* `geracao3.html` — 3ª Geração (NES / 8-bit).
* `geracao4.html` — 4ª Geração (SNES, Mega Drive / 16-bit).
* `geracao5.html` — 5ª Geração (PlayStation, Nintendo 64 / 32/64-bit).
* `geracao6.html` — 6ª Geração (PlayStation 2, Xbox, GameCube).
* `geracao7.html` — 7ª Geração (PS3, Xbox 360, Wii).
* `geracao8.html` — 8ª Geração (PS4, Xbox One, Nintendo Switch).
* `geracao9.html` — 9ª Geração (PS5, Xbox Series X|S).
* `pc.html` — Panorama do mercado de computadores (*PC Master Race*).
* `portateis.html` — O domínio clássico da Nintendo em consoles portáteis (Game Boy ao DS).
* `f2p.html` — Fenômenos *Free-to-Play* e ecossistema de eSports no PC.
* `mobile.html` — Gigantes de downloads e engajamento em smartphones e tablets.
* `todos-os-tempos.html` — O ranking definitivo consolidando vendas globais de todas as plataformas.
* `admin.html` — Mockup funcional de painel administrativo (CMS) para controle de cadastros.
* `css/style.css` — Folha de estilos centralizada do projeto.
* `img/` — Repositório local de mídias e capas dos jogos.

---

## 🛠️ Como Executar o Projeto Localmente

1. Certifique-se de ter clonado ou baixado este repositório em sua máquina.
2. Abra a pasta do projeto em seu editor de código preferido (como o **VS Code**).
3. Utilize uma extensão de servidor local (como o **Live Server**) para abrir o arquivo `index.html` diretamente no seu navegador.
4. Navegue livremente pelas gerações e plataformas através do site!

---

## 📊 Decisões de Arquitetura e Modelagem

* **Isolamento de Métricas:** Diferenciação clara entre o modelo tradicional de *cópias vendidas* (consoles e PC premium), *métricas de engajamento e jogadores ativos* (Free-to-Play) e *volume de downloads acumulados* (Mobile), garantindo rigidez analítica aos dados exibidos.
* **Design Responsivo:** Grade de cards adaptável (`grid-template-columns`) otimizada para diferentes resoluções de tela.
