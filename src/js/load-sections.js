function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('about', 'partials/about.html');
loadHTML('gallery', 'partials/gallery.html');
loadHTML('how', 'partials/how.html');
loadHTML('game', 'partials/game.html');
loadHTML('download', 'partials/download.html');
loadHTML('footer', 'partials/footer.html');
