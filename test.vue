<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item"
          link
          :title="item"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="transparent" flat>
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          @click="drawer = !drawer"
        />
      </template>

      <div class="d-flex flex-1-1-0 ps-md-4">
        <v-avatar image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png" />
      </div>

      <div class="d-md-flex d-none ga-4 mx-auto">
        <v-btn v-for="item in items" :key="item" class="text-none" :text="item" />
      </div>

      <div class="d-flex flex-1-1-0 pe-3">
        <v-btn append-icon="mdi-chevron-right" class="ms-auto text-none" slim text="Login" />
      </div>
    </v-app-bar>

    <v-main :min-height="$vuetify.display.mdAndUp ? 800 : 550">
      <v-container class="h-100 d-flex align-center justify-center">
        <div class="w-100 w-md-50 text-center">
          <v-chip border="thin opacity-25" color="surface" variant="flat">
            <span class="d-none d-md-block">Announcing our</span> <span class="d-md-none">Our&nbsp;</span> next round of funding. Click <a class="d-inline-block mx-1 text-decoration-none text-primary" href="#">here</a> to learn more.
          </v-chip>

          <h1 class="text-headline-large text-md-display-large font-weight-bold my-6">
            Data to enrich your online business
          </h1>

          <div class="text-body-large text-medium-emphasis mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam!
          </div>

          <div class="d-flex ga-4 justify-center">
            <v-btn
              class="text-none"
              color="primary"
              flat
              rounded="lg"
              text="Get started"
            />

            <v-btn
              append-icon="mdi-chevron-right"
              class="text-none"
              flat
              rounded="lg"
              text="Learn more"
            />
          </div>
        </div>

        <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
          <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>