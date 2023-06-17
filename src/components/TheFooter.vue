<template>
  <footer class="footer">
    <div class="_container">
      <ul class="navbar-list">
        <li v-for="(link, index) in links" :key="index" class="navbar-item">
          <router-link :to="link.url" class="navbar-link">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
