// Матчтар тізімі
const matches = [
  {
    home: {
      name: "Real Madrid",
      logo: "c:/Users/victus/Downloads/images/imageREALMADRIDLOGO.svg",
      player: "c:/Users/victus/Downloads/images/imageMBAPPE.png"
    },
    away: {
      name: "Barcelona",
      logo: "c:/Users/victus/Downloads/images/imageBARCELONALOGO.svg",
      player: "c:/Users/victus/Downloads/images/imageYAMAL.webp"
    },
    date: "18 қараша, 22:00"
  },
  {
    home: {
      name: "PSG",
      logo: "c:/Users/victus/Downloads/images/imagePSGLOGO.svg",
      player: "c:/Users/victus/Downloads/images/imageDEMBELE.avif"
    },
    away: {
      name: "Manchester City",
      logo: "c:/Users/victus/Downloads/images/imageMANCITYLOGO.svg",
      player: "c:/Users/victus/Downloads/images/imageHALAND.webp"
    },
    date: "21 қараша, 22:00"
  },
  {
    home: {
      name: "Bayern Munich",
      logo: "c:/Users/victus/Downloads/images/imageBAYERNLOGO.svg",
      player: "c:/Users/victus/Downloads/images/imageKANE.avif"
    },
    away: {
      name: "Borussia Dortmund",
      logo: "c:/Users/victus/Downloads/images/imageBORUSSIALOGO.png",
      player: "c:/Users/victus/Downloads/images/imageJOBE.webp"
    },
    date: "25 қараша, 22:00"
  }
];

let index = 0;
const matchContainer = document.getElementById("matchContainer");
const matchDate = document.getElementById("matchDate");

function showMatch() {
  const match = matches[index];

  matchContainer.innerHTML = `
    <div class="team">
      <div class="team-content">
        <img src="${match.home.player}" class="player" alt="${match.home.name} ойыншысы">
        <img src="${match.home.logo}" class="logo" alt="${match.home.name}">
      </div>
      <h2>${match.home.name}</h2>
    </div>

    <div class="vs">VS</div>

    <div class="team">
      <div class="team-content">
        <img src="${match.away.logo}" class="logo" alt="${match.away.name}">
        <img src="${match.away.player}" class="player" alt="${match.away.name} ойыншысы">
      </div>
      <h2>${match.away.name}</h2>
    </div>
  `;

  matchDate.textContent = match.date;
  index = (index + 1) % matches.length;
}

showMatch();
setInterval(showMatch, 6000);

// ===========================================
// 🆕 КЛУБТАРДЫ АУЫСТЫРУ ЛОГИКАСЫ (Hero Section)
// ===========================================

// Клуб деректерінің массиві (сурет жолдарын өзіңізге сәйкес өзгертіңіз!)
const clubsData = [
    // Real Madrid
    { name: "REAL MADRID", logo: "c:/Users/victus/Downloads/images/imageREALMADRIDLOGO.svg", photo: "c:/Users/victus/Downloads/images/imageTEAMREAL.jpg" },
    // FC Barcelona
    { name: "FC BARCELONA", logo: "c:/Users/victus/Downloads/images/imageBARCELONALOGO.svg", photo: "c:/Users/victus/Downloads/images/imageTEAMBARCA.jpeg" },
    // Paris Saint-Germain
    { name: "PSG", logo: "c:/Users/victus/Downloads/images/imagePSGLOGO.svg", photo: "c:/Users/victus/Downloads/images/imageTEAMPSG.avif" },
    // Bayern Munich
    { name: "BAYERN MUNICH", logo: "c:/Users/victus/Downloads/images/imageBAYERNLOGO.svg", photo: "c:/Users/victus/Downloads/images/imageTEAMBAYERN.webp" },
    // Liverpool FC
    { name: "LIVERPOOL", logo: "c:/Users/victus/Downloads/images/imageLIVERPOOLLOGO.svg", photo: "c:/Users/victus/Downloads/images/imageTEAMLIVERPOOL.jpg" }
];

let currentClubIndex = 0;
const rotationInterval = 3000; // 3 секунд сайын ауысу

// DOM элементтерін алу
const clubCard = document.getElementById('club-card');
const clubEmblem = document.getElementById('club-emblem');
const clubName = document.getElementById('club-name');
const teamPhoto = document.getElementById('team-photo'); 

if (clubCard && clubEmblem && clubName && teamPhoto) {
    
    /**
     * Клубтың контентін жаңартады.
     */
    function updateClubContent(index) {
        const club = clubsData[index];
        
        // Ауысу кезінде мөлдірлікті тегіс өзгерту үшін
        clubCard.style.transition = 'opacity 0.3s ease-in-out';
        clubCard.style.opacity = '0';
        
        setTimeout(() => {
            // Деректерді жаңарту
            clubEmblem.src = club.logo;
            clubEmblem.alt = `${club.name} Emblem`;
            clubName.textContent = club.name;
            teamPhoto.src = club.photo;
            teamPhoto.alt = `${club.name} Team Photo`;

            // Қайта көрсету
            clubCard.style.opacity = '1'; 
        }, 300); // 300ms кейін деректерді жаңарту
    }

    /**
     * Келесі клубқа ауысады.
     */
    function nextClub() {
        currentClubIndex = (currentClubIndex + 1) % clubsData.length;
        updateClubContent(currentClubIndex);
    }

    // Бастапқыда бірінші клубты жүктеу
    updateClubContent(currentClubIndex);

    // Автоматты ауыстыруды іске қосу
    setInterval(nextClub, rotationInterval); 

} else {
    console.warn("Клуб картасының элементтері (ID-лері) HTML-ден табылмады. Қайта тексеріңіз.");
}

// ===========================================
// (МҰНДА СІЗДІҢ ЕСКІ КЕЛЕСІ МАТЧТАР ЖӘНЕ БАСҚА JS КОДТАРЫҢЫЗ ЖАЛҒАСА БЕРЕДІ)
// ===========================================

