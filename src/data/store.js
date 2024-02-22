import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://localhost:3000/",
  getImg(imgName) {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  },
});
