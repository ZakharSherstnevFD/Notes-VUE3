<template>
  <header class="navbar">
    <div class="_container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-logo" href="">{{
          title
        }}</router-link>
        <ul class="navbar-list">
          <li v-for="(link, index) in links" :key="index" class="navbar-item">
            <router-link :to="link.url" class="navbar-link">{{
              link.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
