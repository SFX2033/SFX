fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titre-site').innerText = data.site_title;
    document.getElementById('texte-presentation').innerText = data.presentation_text;
    document.getElementById('tarif-affichage').innerText = data.price_consultation;
    
    // Si une image est présente dans le JSON, on l'applique partout
    if (data.profile_picture) {
      // 1. On change la photo de profil de la section About
      document.getElementById('photo-client').src = data.profile_picture;
      
      // 2. On change l'image de fond du Hero dynamiquement
      const hero = document.getElementById('hero-bg');
      hero.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.profile_picture}')`;
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
    }
  });