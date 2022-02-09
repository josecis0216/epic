<template>
    <!--<hello-world />-->
    <body-content />
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import BodyContent from "../components/BodyContent";

export default {
  name: "Home",
  title: "Epic Flooring",

  components: {
    HelloWorld,
    BodyContent,
  },
};
</script>
