import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(() => {
  return {
    provide: {},
    vuetify: createVuetify({
      components,
      directives,
    }),
  }
})


