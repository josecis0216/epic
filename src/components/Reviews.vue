<template>
  <v-container>
    <h3>Client Reviews</h3>
    <v-row>
      <v-col cols="4" v-for="review in reviews" :key="review.review">
        <v-card elevation="2" >
            <v-icon size="24px" v-for="i in 5" :key="i">
             mdi-star
            </v-icon><br>
            {{ review.review }}
          <v-divider></v-divider>
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
          author: "Keith Berne",
        },
        {
          review: `Epic was great to work with, very professional and did an awesome job with my garage floors. I highly reccomend to 
          anyone looking at getting epoxy floors`,
          rating: 5,
          author: "Lauren Price",
        },
        {
          review: "Incredible job! Will definitely use these guys again at my next jobs.",
          rating: 5,
          author: "Paul Williams",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>