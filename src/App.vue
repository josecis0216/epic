<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Footer,
    Header,
  }
};
</script>

<style>
  @import '../public/css/styles.css';
</style>