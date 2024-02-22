<script>
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <header>
      <i class="fa-solid fa-bars"></i>
      <div class="active-user">
        <i class="fa-solid fa-envelope"></i>
        <img :src="store.getImg('user-image.jpeg')" alt="Mario Rossi" />
        <h5>Mario Rossi</h5>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </header>
  </main>
</template>

<style lang="scss" scoped>
main {
  header {
    height: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gainsboro;
    i {
      cursor: pointer;
    }
    .active-user {
      display: flex;
      align-items: center;
      gap: 10px;
      color: rgb(116, 127, 137);
      cursor: pointer;
      img {
        height: 45px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
  }
}
</style>
