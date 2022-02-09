<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">Follow Us on social media!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          dark
          icon
        >
        <a :href="icon.url" :target="icon.target" style="text-decoration:none;color:white;">
          <v-icon size="32px">
             {{ icon.name }}
          </v-icon>
          </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Epic Flooring Solutions</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {name: 'mdi-facebook', url: 'https://www.facebook.com', target: '_blank'},
        {name:'mdi-twitter', url: 'https://www.twitter.com', target: '_blank'},
        {name:'mdi-linkedin', url:'https://www.linkedin.com', target: '_blank'},
        {name:'mdi-instagram', url:'https://www.instagram.com', target: '_blank'},
      ]
    }),
  }
</script>

<style scoped>

</style>