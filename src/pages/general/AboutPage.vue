<template>
  <v-container style="max-width: 100%">
    <div
      style="background-color: gray; padding-top: 25px"
      class="text-center"
    >
      <h2>About Epic Flooring</h2>
      <p id="aboutBanner">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
    <v-row style="margin-top: 15px">
      <v-col cols="12" xs="12" sm="12" lg="3" v-for="info in about" :key="info.icon">
        <v-card elevation="2" class="text-center">
          <v-icon size="64px">
            {{ info.icon }} </v-icon
          ><br />
          {{ info.description }}
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters style="margin-top:25px;"> 
      <v-col
        md="6"
        offset-md="3"
        >
        <iframe
         id="ytVideo"
          src="https://www.youtube.com/embed/ZS_kXvOeQ5Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      about: [
        {
          description: "Operational Excellence",
          icon: "mdi-finance",
        },
        {
          description: "Years of Experience",
          icon: "mdi-seal-variant",
        },
        {
          description: "Family Owned Business",
          icon: "mdi-account-multiple",
        },
        {
          description: "Incredible Support Staff",
          icon: "mdi-face-agent",
        },
      ],
    };
  },
};
</script>

