<template>
  <v-container>
    <h3>Client Reviews</h3>
    <v-row>
      <v-col cols="4" v-for="review in reviews" :key="review.review">
        <v-card elevation="2" >
          <v-divider></v-divider>
          {{ review.review }}<br>
          - {{ review.author }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      reviews: [
        {
          review: "What a great service provided by Epic!",
          rating: 5,
          author: "Jose Cisneros",
        },
        {
          review: "What a great service provided by Epic!",
          rating: 5,
          author: "Jose Cisneros",
        },
        {
          review: "What a great service provided by Epic!",
          rating: 5,
          author: "Jose Cisneros",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>