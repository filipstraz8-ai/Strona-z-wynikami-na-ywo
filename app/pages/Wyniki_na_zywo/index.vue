<script setup lang="ts">
import { ref } from 'vue';

interface League {
  id: number;
  name: string;
  logo?: string;
}

const query = ref("");
const Wyniki_na_zywo = ref<League[]>([]);
async function search() {
  try {
    const data: any = await $fetch(
      `https://v1.handball.api-sports.io/leagues`
    );
    Wyniki_na_zywo.value = data.response || [];
  } catch (error) {
    console.error('Error fetching leagues:', error);
  }
}
</script>
<template>
  <div>
    Wyniki na zywo
  </div>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="league in Wyniki_na_zywo" :key="league.id">
      <div>
        <img v-if="league.logo" :src="league.logo" :alt="league.name" width="100" />
        <p>{{ league.name }}</p>
      </div>
    </li>
  </ul>
</template>
<style scoped></style>