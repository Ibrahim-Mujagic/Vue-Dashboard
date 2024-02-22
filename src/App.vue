<script>
import AsideComponent from "./components/AsideComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    AsideComponent,
    MainComponent,
  },
};
</script>

<template>
  <div class="container-general">
    <AsideComponent />
    <MainComponent />
  </div>
</template>

<style lang="scss">
.container-general {
  height: 100vh;
  display: flex;
  aside,
  main {
    height: 100%;
  }
  aside {
    width: 20%;
  }
  main {
    width: 80%;
  }
}
</style>
