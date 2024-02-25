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
    .container-chart {
      background-color: #fff;
      border: 1px solid gainsboro;

      .chart-header {
        text-align: center;
        padding: 10px 0px;
        width: 100%;
        border-bottom: 1px solid gainsboro;
        h4 {
          color: #475b70;
        }
      }
      .chart-body {
        padding: 15px;
      }
    }
  }
}
</style>
