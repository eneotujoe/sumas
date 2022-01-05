<template>
  <v-row>
    <v-app-bar
      class="secondary"
      app
      v-if="!$strapi.user"
    >
      <nuxt-link to="/" exact class="text-decoration-none">
        <div class="d-flex align-center ml-5">
          <v-toolbar-title class="font-weight-bold">
            {{ siteName }}
          </v-toolbar-title>
        </div>
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="`${item.to}`"
          tile
          text
          nuxt
          class="primary--text text-capitalize"
        >
        <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <profile-menu />
      </v-toolbar-items>
      <v-spacer/>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['siteName', 'navItems']),
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}