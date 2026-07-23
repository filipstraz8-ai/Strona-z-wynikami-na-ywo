<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const route = useRoute();
const apiKey = '46467065d34d8657fe483de158ffd68d';
const leagueId = computed(() => route.params.id);
const leagueName = ref('');
const fixtures = ref<any[]>([]);
const isLoading = ref(false);
const errorMessage = ref('');

async function loadLeagueResults() {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const data: any = await $fetch('https://v1.handball.api-sports.io/fixtures', {
      params: {
        league: leagueId.value,
        season: 2024,
      },
      headers: {
        'x-apisports-key': apiKey,
      },
    });

    fixtures.value = data.response || [];
  } catch (error) {
    errorMessage.value = 'Nie udało się pobrać wyników dla tej ligi.';
    console.error('Error fetching league fixtures:', error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadLeagueResults();
});
</script>

<template>
  <div>
    <h1>Wyniki dla ligi</h1>
    <p v-if="isLoading">Ładowanie...</p>
    <p v-else-if="errorMessage" style="color: red">{{ errorMessage }}</p>

    <div v-else>
      <p><strong>ID ligi:</strong> {{ leagueId }}</p>
      <p v-if="leagueName">{{ leagueName }}</p>

      <ul v-if="fixtures.length" style="padding-left: 20px">
        <li v-for="fixture in fixtures" :key="fixture.fixture.id">
          <p>
            {{ fixture.teams.home.name }} {{ fixture.goals.home }} : {{ fixture.goals.away }} {{ fixture.teams.away.name }}
          </p>
        </li>
      </ul>
      <p v-else>Brak wyników dla tej ligi.</p>
    </div>
  </div>
</template>