<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface League {
  id: number;
  name: string;
  logo?: string;
}

const apiKey = '46467065d34d8657fe483de158ffd68d';
const query = ref('');
const Wyniki_na_zywo = ref<League[]>([]);
const isLoading = ref(false);
const errorMessage = ref('');

async function search() {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const data: any = await $fetch('https://v1.handball.api-sports.io/leagues', {
      headers: {
        'x-apisports-key': apiKey,
      },
    });

    const leagues = data.response || [];
    const normalizedQuery = query.value.trim().toLowerCase();

    Wyniki_na_zywo.value = normalizedQuery
      ? leagues.filter((league: League) => league.name.toLowerCase().includes(normalizedQuery))
      : leagues;
  } catch (error) {
    errorMessage.value = 'Nie udało się pobrać danych z API.';
    console.error('Error fetching leagues:', error);
  } finally {
    isLoading.value = false;
  }
}

function openLeague(league: League) {
  navigateTo(`/Wyniki_na_zywo/${league.id}`);
}

onMounted(() => {
  search();
});
</script>

<template>

  <form @submit.prevent="search">
    <input v-model="query" type="text" placeholder="Wyszukaj ligę" />
    <button type="submit">Search</button>
  </form>

  <p v-if="isLoading">Ładowanie...</p>
  <p v-else-if="errorMessage" style="color: red">{{ errorMessage }}</p>

  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin-top: 16px">
    <li v-for="league in Wyniki_na_zywo" :key="league.id">
      <button type="button" style="background: none; border: none; padding: 0; cursor: pointer; text-align: left" @click="openLeague(league)">
        <div>
          <img v-if="league.logo" :src="league.logo" :alt="league.name" width="70" />
          <p>{{ league.name }}</p>
        </div>
      </button>
    </li>
  </ul>
</template>

<style scoped></style>