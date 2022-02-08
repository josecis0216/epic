<template>
    <v-app-bar
      app
      dark
    >
      <!--<div class="d-flex align-center">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>-->
      <div>
          <a to="/" style="text-decoration:none;color:white;font-size:55px;">Epic</a>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/">
        Home
      </v-btn>
      <v-btn to="/about">
         About
      </v-btn>
      <v-btn to="/contact">
         Contact Us
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
    data: function() {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>