// ===================== REFERENCIAS A ELEMENTOS DEL HTML =====================
// Guardamos en variables los elementos del DOM para usarlos después
const moviesGrid = document.getElementById('movies-grid');
const movieSelect = document.getElementById('movie');
const timeSelect = document.getElementById('time');
const ticketsInput = document.getElementById('tickets');
const priceTotal = document.getElementById('price-total');
const reservationForm = document.getElementById('reservation-form');
const genreFilters = document.getElementById('genre-filters');
const salasGrid = document.getElementById('salas-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const prevForm = document.getElementById('preventa-form');
const toast = document.getElementById('toast');
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

// ===================== MENÚ HAMBURGUESA =====================
// Al hacer clic en el icono hamburguesa, abre/cierra el menú en móvil
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('open');
  const isOpen = mainNav.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Al hacer clic en un enlace del menú, se cierra el menú
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===================== ANIMACIONES AL HACER SCROLL =====================
// Detecta cuando un elemento con data-aos entra en pantalla y lo anima
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-aos]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===================== EFECTO HEADER AL HACER SCROLL =====================
// Cambia el estilo del header cuando se baja más de 60px
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===================== IMAGEN DE RESPALDO =====================
// Si una imagen no carga, muestra un placeholder gris con SVG
function handleImgError(img) {
  img.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><rect fill="#151520" width="400" height="600"/><text fill="#8a8a9a" font-size="18" x="200" y="300" text-anchor="middle">Imagen no disponible</text></svg>`;
  img.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// ===================== DATOS DE LAS 18 PELÍCULAS EN CARTELERA =====================
// Array con toda la información: título, género, horarios, precio, sala, etc.
const movies = [
  {
    id: '1',
    title: 'Thunderbolts*',
    genre: 'Acción, Aventura',
    genreTag: 'accion',
    rating: '12+',
    duration: '127 min',
    director: 'Jake Schreier',
    description: 'Un grupo de antihéroes reclutados por el gobierno para misiones peligrosas. Florence Pugh, Sebastian Stan y David Harbour lideran el equipo.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 1 - IMAX',
    poster: 'img/thunderbolts.jpg',
    showtimes: [
      { time: '16:00' },
      { time: '18:30' },
      { time: '21:00' },
      { time: '23:15' },
    ],
  },
  {
    id: '2',
    title: 'Mission: Impossible - The Final Reckoning',
    genre: 'Acción, Thriller',
    genreTag: 'accion',
    rating: '12+',
    duration: '170 min',
    director: 'Christopher McQuarrie',
    description: 'Ethan Hunt enfrenta su misión más mortal. La conclusión épica de la saga que ha definido el género de espionaje durante 30 años.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 1 - IMAX',
    poster: 'img/mission-impossible.jpg',
    showtimes: [
      { time: '15:30' },
      { time: '19:00' },
      { time: '22:30' },
    ],
  },
  {
    id: '3',
    title: 'Sinners',
    genre: 'Terror, Drama',
    genreTag: 'terror',
    rating: '16+',
    duration: '138 min',
    director: 'Ryan Coogler',
    description: 'Dos hermanos gemelos regresan a su pueblo natal buscando un nuevo comienzo, pero el mal que dejaron atrás les ha estado esperando.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 3 - Dolby Atmos',
    poster: 'img/sinners.jpg',
    showtimes: [
      { time: '17:00' },
      { time: '20:00' },
      { time: '23:00' },
    ],
  },
  {
    id: '4',
    title: 'The Fantastic Four: First Steps',
    genre: 'Superhéroes, Sci-Fi',
    genreTag: 'accion',
    rating: '7+',
    duration: '125 min',
    director: 'Matt Shakman',
    description: 'Los Cuatro Fantásticos hacen su debut en el MCU, explorando una dimensión retro-futurista para salvar la Tierra.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 2 - 4DX',
    poster: 'img/the-fantastic-four.jpg',
    showtimes: [
      { time: '16:30' },
      { time: '19:00' },
      { time: '21:30' },
    ],
  },
  {
    id: '5',
    title: 'Jurassic World: Rebirth',
    genre: 'Aventura, Sci-Fi',
    genreTag: 'accion',
    rating: '12+',
    duration: '135 min',
    director: 'Gareth Edwards',
    description: 'Cinco años después de los eventos anteriores, un equipo se adentra en un ecosistema aislado donde los dinosaurios dominan la naturaleza.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 1 - IMAX',
    poster: 'img/jurassic-world.jpg',
    showtimes: [
      { time: '15:00' },
      { time: '17:45' },
      { time: '20:30' },
      { time: '23:00' },
    ],
  },
  {
    id: '6',
    title: 'Snow White',
    genre: 'Fantasía, Musical',
    genreTag: 'familia',
    rating: 'TP',
    duration: '109 min',
    director: 'Marc Webb',
    description: 'La nueva adaptación live-action del clásico cuento de los hermanos Grimm con música original y efectos visuales deslumbrantes.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 7 - Kids Zone',
    poster: 'img/snow-white.webp',
    showtimes: [
      { time: '11:00' },
      { time: '13:30' },
      { time: '16:00' },
      { time: '18:30' },
    ],
  },
  {
    id: '7',
    title: 'A Minecraft Movie',
    genre: 'Animación, Aventura',
    genreTag: 'familia',
    rating: 'TP',
    duration: '95 min',
    director: 'Jared Hess',
    description: 'Cuatro aventureros caen en el mundo cúbico de Minecraft y deberán sobrevivir usando su creatividad para regresar a casa.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 7 - Kids Zone',
    poster: 'img/a-minecraft-movie.webp',
    showtimes: [
      { time: '10:30' },
      { time: '12:30' },
      { time: '14:30' },
      { time: '16:30' },
      { time: '18:30' },
    ],
  },
  {
    id: '8',
    title: 'The Smashing Machine',
    genre: 'Drama, Biopic',
    genreTag: 'drama',
    rating: '16+',
    duration: '142 min',
    director: 'Benny Safdie',
    description: 'La historia real de Mark Kerr, un campeón de artes marciales mixtas cuya carrera fue marcada por su adicción a los analgésicos.',
    price: 16.00,
    type: 'normal',
    sala: 'Sala 6 - VIP',
    poster: 'img/the-smashing-machine.webp',
    showtimes: [
      { time: '17:30' },
      { time: '20:30' },
      { time: '23:15' },
    ],
  },
  {
    id: '9',
    title: 'Black Bag',
    genre: 'Thriller, Espionaje',
    genreTag: 'drama',
    rating: '16+',
    duration: '93 min',
    director: 'Steven Soderbergh',
    description: 'Una agente del MI6 descubre que su esposo, también agente, podría ser un traidor. La tensión entre el deber y el amor.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 5 - Midnight',
    poster: 'img/black-bag.webp',
    showtimes: [
      { time: '18:00' },
      { time: '20:30' },
      { time: '22:45' },
    ],
  },
  {
    id: '10',
    title: 'Novocaine',
    genre: 'Acción, Comedia',
    genreTag: 'accion',
    rating: '16+',
    duration: '110 min',
    director: 'Dan Berk & Robert Olsen',
    description: 'Un hombre que no siente dolor físico se convierte en un héroe improvisado cuando atraca un banco para salvar a la mujer que ama.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 4 - Clásica',
    poster: 'img/novocaine.webp',
    showtimes: [
      { time: '16:00' },
      { time: '18:30' },
      { time: '21:00' },
      { time: '23:30' },
    ],
  },
  {
    id: '11',
    title: 'The Accountant 2',
    genre: 'Acción, Thriller',
    genreTag: 'accion',
    rating: '16+',
    duration: '125 min',
    director: 'Gavin O\'Connor',
    description: 'Christian Wolff vuelve con más contabilidad que resolver, esta vez con un complot que abarca tres países y una red de corrupción.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 3 - Dolby Atmos',
    poster: 'img/the-accountant-2.webp',
    showtimes: [
      { time: '17:00' },
      { time: '19:45' },
      { time: '22:15' },
    ],
  },
  {
    id: '12',
    title: 'Weapons',
    genre: 'Terror, Misterio',
    genreTag: 'terror',
    rating: '16+',
    duration: '119 min',
    director: 'Zach Cregger',
    description: 'Todos los niños de un pueblo desaparecen a la misma hora en la misma noche. Lo que descubren sus padres es más aterrador de lo imaginable.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 5 - Midnight',
    poster: 'img/weapons.webp',
    showtimes: [
      { time: '18:30' },
      { time: '21:00' },
      { time: '23:45' },
    ],
  },
  {
    id: '13',
    title: '28 Years Later',
    genre: 'Terror, Sci-Fi',
    genreTag: 'terror',
    rating: '18+',
    duration: '115 min',
    director: 'Danny Boyle',
    description: 'Casi tres décadas después del brote del virus de la ira, la humanidad ha evolucionado pero el horror sigue vivo. Cillian Murphy regresa.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 3 - Dolby Atmos',
    poster: 'img/28-years-later.webp',
    showtimes: [
      { time: '19:00' },
      { time: '21:30' },
      { time: '00:00' },
    ],
  },
  {
    id: '14',
    title: 'Elio',
    genre: 'Animación, Aventura',
    genreTag: 'familia',
    rating: 'TP',
    duration: '102 min',
    director: 'Adrian Molina',
    description: 'Un niño de 11 años es accidentalmente teletransportado al espacio y debe representar a la Tierra ante un consejo intergaláctico.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 7 - Kids Zone',
    poster: 'img/elio.webp',
    showtimes: [
      { time: '11:30' },
      { time: '14:00' },
      { time: '16:30' },
      { time: '19:00' },
    ],
  },
  {
    id: '15',
    title: 'F1: The Movie',
    genre: 'Drama, Deportes',
    genreTag: 'drama',
    rating: '12+',
    duration: '130 min',
    director: 'Joseph Kosinski',
    description: 'Un veterano piloto de Fórmula 1 vuelve a la competición para entrenar a un joven prodigio. Brad Pitt en la pista de verdad.',
    price: 12.00,
    type: 'normal',
    sala: 'Sala 1 - IMAX',
    poster: 'img/f1-the-movie.webp',
    showtimes: [
      { time: '16:00' },
      { time: '18:45' },
      { time: '21:30' },
    ],
  },
  {
    id: '16',
    title: 'How to Train Your Dragon',
    genre: 'Fantasía, Aventura',
    genreTag: 'familia',
    rating: 'TP',
    duration: '125 min',
    director: 'Dean DeBlois',
    description: 'La adaptación live-action del clásico animado. Hipo y Desdentado cobran vida real en esta épica historia de amistad y valentía.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 4 - Clásica',
    poster: 'img/how-to-train-your-dragon.webp',
    showtimes: [
      { time: '12:00' },
      { time: '14:30' },
      { time: '17:00' },
      { time: '19:30' },
    ],
  },
  {
    id: '17',
    title: 'Karate Kid: Legends',
    genre: 'Acción, Drama',
    genreTag: 'accion',
    rating: '7+',
    duration: '95 min',
    director: 'Jonathan Entwistle',
    description: 'Jackie Chan y Ralph Macchio se reúnen como mentores de una nueva generación de luchadores en esta nueva entrega de la saga.',
    price: 9.50,
    type: 'normal',
    sala: 'Sala 4 - Clásica',
    poster: 'img/karate-kid-legends.webp',
    showtimes: [
      { time: '15:00' },
      { time: '17:30' },
      { time: '20:00' },
    ],
  },
  {
    id: '18',
    title: 'Project Hail Mary',
    genre: 'Sci-Fi, Aventura',
    genreTag: 'accion',
    rating: '16+',
    duration: '120 min',
    director: 'Phil Lord',
    description: 'Un astronauta despierta en una nave interestelar sin recuerdos y debe contemplar las estrellas para salvar a la humanidad.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 1 - IMAX',
    poster: 'img/project-hail-mary.jpg',
    showtimes: [
      { time: '16:00' },
      { time: '18:30' },
      { time: '21:00' },
    ],
  },
  {
    id: '20',
    title: 'El Principito',
    genre: 'Fantasía',
    genreTag: 'familia',
    rating: 'TP',
    duration: '60 min',
    director: 'Mark Osborne',
    description: 'Lo esencial es invisible a los ojos.',
    price: 8.00,
    type: 'estreno',
    sala: 'Sala 3 - Dolby Atmos',
    poster: 'img/el-principito.webp',
    showtimes: [
      { time: '11:00' },
      { time: '13:00' },
      { time: '16:00' },
    ],
  },
  {
    id: '21',
    title: 'Michael',
    genre: 'Drama, Musical, Biopic',
    genreTag: 'drama',
    rating: '12+',
    duration: '127 min',
    director: 'Antoine Fuqua',
    description: 'La historia de Michael Jackson, el artista más influyente de todos los tiempos, desde sus inicios en los Jackson Five hasta convertirse en el mayor espectáculo del mundo.',
    price: 9.50,
    type: 'estreno',
    sala: 'Sala 6 - VIP',
    poster: 'img/michael.webp',
    showtimes: [
      { time: '16:00' },
      { time: '19:00' },
      { time: '22:00' },
    ],
  },
];

// ===================== DATOS DE LA PELÍCULA EN PREVENTA =====================
// Película especial con precio rebajado (7,90€) respecto al precio original (9,50€)
const moviePreventa = {
  id: '22',
  title: 'The Amazing Digital Circus: La película',
  genre: 'Animación, Misterio',
  genreTag: 'familia',
  rating: '7+',
  duration: '110 min',
  director: 'Gooseworx',
  description: 'Pomni y sus amigos del Circo Digital deben enfrentar un nuevo misterio cuando una puerta secreta revela un mundo aún más extraño. ¿Podrán escapar o quedarán atrapados para siempre?',
  price: 8.90,
  originalPrice: 9.50,
  type: 'preventa',
  sala: 'Sala 8 - Grand Screen',
  poster: 'img/the-amazing-digital-circus-la-película.webp',
  showtimes: [
    { time: '17:00' },
    { time: '19:30' },
    { time: '22:00' },
  ],
};

// ===================== DATOS DE LAS 8 SALAS DEL CINE =====================
// Cada sala tiene: número, nombre, capacidad, formato y características
const salas = [
  { number: 'Sala 1', name: 'Lumière IMAX', capacity: '150 butacas', format: 'IMAX Laser', features: ['Pantalla 22m', 'Sonido 12 canales', 'Laser 4K'] },
  { number: 'Sala 2', name: 'Experiencia 4DX', capacity: '120 butacas', format: '4DX Motion', features: ['Asientos móviles', 'Efectos clima', '4K 3D'] },
  { number: 'Sala 3', name: 'Dolby Cinema', capacity: '80 butacas', format: 'Dolby Atmos', features: ['Sonido 3D', 'Negros perfectos', 'HDR'] },
  { number: 'Sala 4', name: 'Sala Clásica', capacity: '100 butacas', format: 'Digital 4K', features: ['Proyección 4K', 'Dolby 7.1'] },
  { number: 'Sala 5', name: 'Midnight', capacity: '90 butacas', format: 'Digital 4K', features: ['Sesiones nocturnas', 'Dolby 7.1'] },
  { number: 'Sala 6', name: 'VIP Lounge', capacity: '70 butacas', format: 'Premium', features: ['Butacas reclinables', 'Bar servicio', 'Mantas'] },
  { number: 'Sala 7', name: 'Kids Zone', capacity: '60 butacas', format: 'Familiar', features: ['Ambiente infantil', 'Iluminación suave'] },
  { number: 'Sala 8', name: 'Grand Screen', capacity: '130 butacas', format: 'Premium', features: ['Pantalla curva 18m', 'Dolby Atmos', 'IMAX 3D'] },
];

// ===================== FILTROS POR GÉNERO =====================
// Lista de géneros disponibles para filtrar la cartelera
const genres = [
  { id: 'todos', label: 'Todas' },
  { id: 'accion', label: 'Acción' },
  { id: 'terror', label: 'Terror' },
  { id: 'familia', label: 'Familia' },
  { id: 'drama', label: 'Drama' },
];

// Filtro activo actual (por defecto "todos")
let activeFilter = 'todos';

// Crea los botones de filtro en el HTML
function renderGenreFilters() {
  genreFilters.innerHTML = '';
  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.classList.add('genre-btn');
    if (genre.id === activeFilter) btn.classList.add('active');
    btn.textContent = genre.label;
    btn.addEventListener('click', () => {
      activeFilter = genre.id;
      renderGenreFilters();
      renderMoviesGrid();
    });
    genreFilters.appendChild(btn);
  });
}

// ===================== OBTENER FECHA DE HOY =====================
// Devuelve la fecha actual en formato YYYY-MM-DD
function getTodayFormatted() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

// ===================== RENDERIZAR CARTELERA =====================
// Filtra las películas según el género activo
function getFilteredMovies() {
  if (activeFilter === 'todos') return movies;
  return movies.filter(m => m.genreTag === activeFilter);
}

// Pinta las tarjetas de películas en el grid
function renderMoviesGrid() {
  moviesGrid.innerHTML = '';
  const filtered = getFilteredMovies();
  const today = getTodayFormatted();

  filtered.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    // Si tiene póster lo muestra, si no, muestra un placeholder
    const posterHTML = movie.poster
      ? `<img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" loading="lazy" onerror="handleImgError(this)" />`
      : `<div class="movie-poster-fallback" style="background: linear-gradient(135deg, #1a1a2e, #151520)"><span>🎬</span></div>`;

    card.innerHTML = `
      <div class="movie-poster">
        ${posterHTML}
        <span class="movie-badge ${movie.type}">${movie.type === 'estreno' ? 'Estreno' : movie.type === 'preventa' ? 'Preventa' : 'Hoy'}</span>
        <span class="movie-rating">${movie.rating}</span>
      </div>
      <div class="movie-body">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.duration}</span>
          <span>${movie.sala}</span>
          <span>${movie.price.toFixed(2).replace('.', ',')}€</span>
        </div>
        <div class="movie-genre">${movie.genre}</div>
        <div class="movie-sessions">
          ${movie.showtimes.map(s => `<button class="session-tag" data-movie-id="${movie.id}" data-time="${s.time}">${s.time}</button>`).join('')}
        </div>
      </div>
    `;

    // Al hacer clic en el póster, abre el modal o va a preventa
    card.querySelector('.movie-poster').addEventListener('click', () => {
      if (movie.type === 'preventa') {
        document.getElementById('preventa').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      openModal(movie);
    });

    moviesGrid.appendChild(card);
  });

  // Al hacer clic en un horario, rellena el formulario de reserva
  document.querySelectorAll('.session-tag').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const movieId = e.target.dataset.movieId;
      const time = e.target.dataset.time;
      const movie = [...movies, moviePreventa].find(m => m.id === movieId);
      if (movie) {
        handleSelection(movie, { time, date: today });
      }
    });
  });
}

// ===================== RENDERIZAR SALAS =====================
// Pinta las tarjetas de cada sala en el grid
function renderSalas() {
  salasGrid.innerHTML = '';
  salas.forEach(sala => {
    const card = document.createElement('div');
    card.classList.add('sala-card');
    card.innerHTML = `
      <div class="sala-number">${sala.number}</div>
      <div class="sala-name">${sala.name}</div>
      <div class="sala-format">${sala.format}</div>
      <div class="sala-capacity"> ${sala.capacity}</div>
      <div class="sala-features">
        ${sala.features.map(f => `<span class="sala-feature">${f}</span>`).join('')}
      </div>
    `;
    salasGrid.appendChild(card);
  });
}

// ===================== SELECT DE PELÍCULAS =====================
// Llena el desplegable del formulario con las películas disponibles
function fillMovieSelect() {
  movieSelect.innerHTML = '<option value="">Selecciona una película</option>';

  movies.forEach(movie => {
    const option = document.createElement('option');
    option.value = movie.id;
    option.textContent = `${movie.title} (${movie.price.toFixed(2).replace('.', ',')}€)`;
    option.dataset.price = movie.price;
    movieSelect.appendChild(option);
  });

  // Al cambiar la película, actualiza los horarios y el precio
  movieSelect.addEventListener('change', () => {
    const selectedMovie = movies.find(m => m.id === movieSelect.value);
    if (selectedMovie) {
      fillTimeSelect(selectedMovie);
      updatePrice();
    }
  });
}

// ===================== SELECT DE HORARIOS =====================
// Llena el desplegable de horas según la película seleccionada
function fillTimeSelect(movie, selectedTime = null) {
  timeSelect.innerHTML = '';

  movie.showtimes.forEach(showtime => {
    const option = document.createElement('option');
    option.value = showtime.time;
    option.textContent = showtime.time;
    if (showtime.time === selectedTime) {
      option.selected = true;
    }
    timeSelect.appendChild(option);
  });
}

// ===================== ACTUALIZAR PRECIO TOTAL =====================
// Calcula el precio multiplicando el precio de la película por las entradas
function updatePrice() {
  const selectedOption = movieSelect.options[movieSelect.selectedIndex];
  const price = parseFloat(selectedOption.dataset.price) || 9.50;
  const tickets = parseInt(ticketsInput.value) || 1;
  const total = (price * tickets).toFixed(2).replace('.', ',');
  priceTotal.textContent = `${total}€`;
}

// Cada vez que cambia el número de entradas, se actualiza el precio
ticketsInput.addEventListener('input', updatePrice);

// ===================== FORMULARIO DE RESERVA =====================
// Rellena el formulario con la película y horario seleccionados
function fillReservationForm(movie, showtime) {
  movieSelect.value = movie.id;
  document.getElementById('date').value = showtime.date || getTodayFormatted();
  fillTimeSelect(movie, showtime.time);
  ticketsInput.value = 2;
  updatePrice();
}

// Cuando se selecciona un horario, rellena el formulario y va a la sección de reservas
function handleSelection(movie, showtime) {
  fillReservationForm(movie, showtime);
  document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
}

// Al enviar el formulario, muestra un mensaje de confirmación y lo resetea
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(reservationForm);
  const movieTitle = movieSelect.options[movieSelect.selectedIndex].text;
  const tickets = formData.get('tickets');
  const date = formData.get('date');
  const time = formData.get('time');

  showToast(`Reserva confirmada: ${tickets} entrada(s) para "${movieTitle}" el ${date} a las ${time}`);
  reservationForm.reset();
  document.getElementById('date').value = getTodayFormatted();
  updatePrice();
});

// ===================== FORMULARIO DE PREVENTA =====================
// Al enviar la preventa, muestra un toast con los datos y resetea el formulario
prevForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('preventa-name').value;
  const email = document.getElementById('preventa-email').value;
  const tickets = document.getElementById('preventa-tickets').value;
  const session = document.getElementById('preventa-session').value;
  const total = (parseFloat(moviePreventa.price) * parseInt(tickets)).toFixed(2).replace('.', ',');

  showToast(`Preventa reservada: ${tickets} entrada(s) para Digital Circus el 25/07 a las ${session}. Total: ${total}€`);
  prevForm.reset();
});

// ===================== VENTANA MODAL =====================
// Abre el modal con la información de la película y sus horarios
function openModal(movie) {
  document.getElementById('modal-title').textContent = movie.title;
  document.getElementById('modal-meta').innerHTML = `
    <span>${movie.duration}</span>
    <span>${movie.rating}</span>
    <span>${movie.director}</span>
    <span>${movie.sala}</span>
    <span>${movie.genre}</span>
  `;
  document.getElementById('modal-description').textContent = movie.description;

  const today = getTodayFormatted();
  document.getElementById('modal-sessions').innerHTML = movie.showtimes.map(s =>
    `<button class="modal-session" data-time="${s.time}">${s.time} - ${today}</button>`
  ).join('');
  document.getElementById('modal-price').textContent = `Desde ${movie.price.toFixed(2).replace('.', ',')}€`;

  modalOverlay.classList.add('active');

  // Al hacer clic en un horario del modal, cierra el modal y rellena la reserva
  document.querySelectorAll('.modal-session').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal();
      handleSelection(movie, { time: btn.dataset.time, date: today });
    });
  });
}

// Cierra el modal
function closeModal() {
  modalOverlay.classList.remove('active');
}

// Cierra al hacer clic en la X
modalClose.addEventListener('click', closeModal);
// Cierra al hacer clic fuera del modal
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
// Cierra al pulsar la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===================== CUENTA ATRÁS =====================
// Calcula el tiempo restante hasta el estreno (4 Junio 2026) y actualiza cada segundo
function updateCountdown() {
  const estreno = new Date('2026-06-04T17:00:00');
  const now = new Date();
  const diff = estreno - now;

  // Si ya pasó la fecha, muestra todo a 00
  if (diff <= 0) {
    document.getElementById('countdown-days').textContent = '00';
    document.getElementById('countdown-hours').textContent = '00';
    document.getElementById('countdown-mins').textContent = '00';
    document.getElementById('countdown-secs').textContent = '00';
    return;
  }

  // Calcula días, horas, minutos y segundos restantes
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
  document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('countdown-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('countdown-secs').textContent = String(secs).padStart(2, '0');
}

// Actualiza la cuenta atrás cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// ===================== TOAST (NOTIFICACIONES FLOTANTES) =====================
// Muestra un mensaje flotante durante 4 segundos
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===================== INICIALIZACIÓN =====================
// Llama a todas las funciones para montar la página al cargar
function init() {
  renderGenreFilters();
  renderMoviesGrid();
  renderSalas();
  fillMovieSelect();
  updatePrice();
  initScrollAnimations();
  initHeaderScroll();

  document.getElementById('date').value = getTodayFormatted();
}

init();