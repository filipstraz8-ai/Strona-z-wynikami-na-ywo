<template>
  <div class="app-shell">
    <aside class="sidebar">
      <h2>Moja strona</h2>
      <nav>
        <NuxtLink to="/">Strona główna</NuxtLink>
        <NuxtLink to="/o-mnie">O mnie</NuxtLink>
        <NuxtLink to="/projekty">Projekty</NuxtLink>
        <NuxtLink to="/Wyniki_na_zywo">Wyniki na żywo</NuxtLink>
      </nav>
    </aside>

    <main class="content">
      <header>
        <h1>Portfolio</h1>
      </header>

      <section class="page-content">
        <NuxtPage />
      </section>
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  background: #f5f7fb;
  color: #1f2937;
}

.sidebar {
  width: 260px;
  padding: 24px 20px;
  background: #111827;
  color: white;
}

.sidebar h2 {
  margin: 0 0 20px;
  font-size: 1.2rem;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  color: #e5e7eb;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
}

.sidebar a:hover,
.sidebar a.router-link-active {
  background: #374151;
  color: white;
}

.content {
  flex: 1;
  padding: 24px;
}

header {
  margin-bottom: 20px;
}

.page-content {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
</style>
