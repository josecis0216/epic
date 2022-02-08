<template>
  <v-container style="max-width: 100%">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile style="background-color: gray">
          <div style="background-color: gray; padding: 55px">
            <h1>Epic Flooring Solutions</h1>
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
            <h2>Our Services</h2>
            <div v-for="service in services" :key="service">
              <p style="font-size:16px;">
                <v-icon icon="mdi-lock" color="white" style="margin-bottom: 5px">
                mdi-check
              </v-icon>
              {{ service }}
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row style="padding:100px;">
      <v-col cols="6" sm="12" md="12" lg="6">
        <h2>Get a Quote For Your Project</h2>
      </v-col>
      <v-col cols="6" sm="12" md="12" lg="6" class="text-lg-right">
        <v-btn x-large color="success" dark to="/contact"> Free Quote </v-btn>
      </v-col>
    </v-row>
    <!--<v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>-->
    <v-row style="margin-bottom:25px;">
      <v-col cols="12">
        <v-card class="pa-2" outlined tile>
          <h3 class="text-center">How it Works</h3>
          <v-row v-for="work in works" :key="work.title">
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-img
                max-height="150"
                max-width="250"
                :src="work.url"
              ></v-img>
            </v-col>
            <v-col cols="3">
              <div>
                <h4>{{ work.title }}</h4>
                <p>{{ work.description }}</p>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <Reviews style="margin-bottom:25px;"/>
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
  name: "Body",

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
    works: [
      {title: 'Free Estimates', 
      description: 'Peace of mind knowing that our estimates are always free', 
      url: 'https://picsum.photos/id/11/500/300', },
      {title: 'Quick Installation Time',
      description: 'Upon approving the work, we will get a team on the job as soon as possible',
      url: 'https://picsum.photos/id/11/10/6'},
      {title: 'Incredible Results',
      description: 'We will make sure you are completely satisfied with the job',
      url: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'}
    ]
  }),
  components: {
    Reviews,
  },
};
</script>
