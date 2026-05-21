// On récupère les données mises à jour par le client
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    // On injecte les textes et tarifs dans le HTML
    document.getElementById('titre-site').innerText = data.site_title;
    document.getElementById('texte-presentation').innerText = data.presentation_text;
    document.getElementById('tarif-affichage').innerText = data.price_consultation;

    // MISE À JOUR DE LA PHOTO ICI
    if (data.profile_picture) {
      document.getElementById('photo-client').src = data.profile_picture;
    }
  });