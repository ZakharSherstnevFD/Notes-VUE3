<template>
  <div class="wrapper">
    <TheHeader :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="_container">
        <router-view />
      </div>
    </div>
    <TheFooter :links="links" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { links } from "./_config";
export default {
  components: { TheHeader, TheFooter },

  data() {
    return {
      title: "Template",
      links: links,
    };
  },
};
</script>
