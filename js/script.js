fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    // Remplacement des textes
    document.getElementById('titre-site').innerText = data.site_title;
    document.getElementById('texte-presentation').innerText = data.presentation_text;
    document.getElementById('tarif-affichage').innerText = data.price_consultation;
    
    // Remplacement de la photo de profil
    if (data.profile_picture) {
      document.getElementById('photo-client').src = data.profile_picture;
      
      // BONUS : Met aussi à jour dynamiquement l'image de fond du Hero en ligne !
      document.getElementById('hero-bg').style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.profile_picture}')`;
      document.getElementById('hero-bg').style.backgroundSize = 'cover';
      document.getElementById('hero-bg').style.backgroundPosition = 'center';
    }
  })
  .catch(error => console.error("Erreur de chargement du JSON :", error));