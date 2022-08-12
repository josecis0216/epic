<template>
    <!--<hello-world />-->
    <body-content />
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
import BodyContent from "../../components/BodyContent.vue";

export default {
  name: "Home",
  title: "Epic Flooring",

  components: {
    HelloWorld,
    BodyContent,
  },
};
</script>
