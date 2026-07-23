<template>
  <div>
    <h1>Moje zainteresowania</h1>

    <div style="border: 1px solid #ccc; background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('https://mtschrzanow.pl/wp-content/uploads/2024/10/CHRZANOW-1.svg'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 16px; border-radius: 8px; max-width: 500px;" class="interest-card" @click="navigateTo('https://pilkareczna.com/zawodnik/57704')">
      <h2>Piłka ręczna</h2>
      <p> Jestem zawodnikiem piłki ręcznej reprezentujacym brawy MTS-u Chrzanów. 
        Gram na pozycji prawo-skrzydłowego. A moja przygoda z piłką ręczną zaczęła się juz w wieku 7 lat.
        Dodatkowo jestem kibicem Industrii Kielce, a wyniki tej druzyny śledzę od najmłodszych lat,  
        każdy, kto również interesuje się piłką ręczną, może sprawdzać wyniki ulubionych klubów na żywo w zakładce <NuxtLink to="/Wyniki_na_zywo">Wyniki na żywo</NuxtLink>.        
      </p>
      <a href="https://pilkareczna.com/zawodnik/57704">Profil Zawodnika</a>
    </div>
  </div>
       <div style="border: 1px solid #ccc; background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_pyZKm3Vbm5L9T7TFyuTHBYD83CUG0yQFsnqTblLHDPxgK3zjFVuJDqr&s=10'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 16px; border-radius: 8px; max-width: 500px;" class="interest-card" @click="navigateTo('https://pilkalokalna.pl/referee/straz-filip/?season=2025-2026')">
      <h2>Sedzia Pilkarski</h2>
      <p> Jestem sędzią piłkarskim w Podkarpackim Związku Piłki Nożnej. Posiadam licencję sędziego na poziomie V ligi, oraz sędziego asystenta na poziomie III Ligi.
        Moją pasję rozwijam od 2019 roku, a w tym czasie prowadziłem wiele meczy na poziomie amatorskim i półprofesjonalnym.
        Dodatkowo mam na swoim koncie mecze kontrolne najlepszych drużyn w Polsce, takich jak Wisła Kraków, czy Stal Mielec.      
      </p>
      <a href="https://pilkalokalna.pl/referee/straz-filip/?season=2025-2026">Profil Sędziego ze statystykami</a>
    </div>
    <h2>Wykształcenie</h2>

    <div style="border: 1px solid #ccc; background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncO-Ckj4ikN8tNW4LBUNtv5FF29K0Po-byUSy5kfO9KJiA_n1hkhC5tge&s=10'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 16px; border-radius: 8px; max-width: 500px;">
      <h2>Informatyka Geoprzestrzenna</h2>
      <p> Jestem studentem III roku Informatyki Geoprzestrzennej na Akademii Górniczo-Hutniczej w Krakowie.
        Kierunek ten pozwala mi na rowzijać moje umiejętności w zakresie analizy danych satelitarnych. 
         
      </p>
    </div>
</template>

<script setup>
const navigateTo = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.interest-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.interest-card:hover {
  background-color: #f0f4ff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.interest-card h2 {
  margin-top: 0;
  color: #333;
}

.interest-card p {
  color: #666;
  line-height: 1.6;
}

.card-link {
  display: inline-block;
  margin-top: 12px;
  color: #0066cc;
  font-weight: 500;
  transition: color 0.2s ease;
}

.interest-card:hover .card-link {
  color: #0052a3;
}
</style>
