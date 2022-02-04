<template>
  <v-container style="max-width: 100%">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile style="background-color: gray">
          <div style="background-color: gray; padding: 55px">
            <h2>Epic Flooring Solutions</h2>
            <p>
              We pride ourselves in completing the best work possible for your
              flooring needs. View our work below to see how we can help you get
              the amazing floor you deserve
            </p>
            <v-btn>View Our Work</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile style="background-color: orange">
          <div style="padding: 55px; background-color: orange">
            <h3>Our Services</h3>
            <div v-for="service in services" :key="service">
              <v-icon icon="mdi-lock" color="white" style="margin-bottom: 5px">
                mdi-lock
              </v-icon>
              {{ service }}
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="6" sm="12" md="12" lg="6">
        <h2>Get a Quote For Your Project</h2>
      </v-col>
      <v-col cols="6" sm="12" md="12" lg="6" class="text-lg-right">
        <v-btn x-large color="success" dark to="/contact"> Free Quote </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <Reviews />
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" lg="12" md="12">
        <v-carousel v-model="model">
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-sheet :color="color" height="100%" width="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Reviews from "./Reviews.vue";

export default {
  name: "HelloWorld",

  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    services: [
      "Flooring",
      "Power Wash",
      "Warehouses",
      "Garages",
      "Decks",
      "Sealing",
    ],
  }),
  components: {
    Reviews,
  },
};
</script>
