<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = 'Vue';
      }
    }
  }
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css);

html,
body {
  height: 100%;
}
</style>
