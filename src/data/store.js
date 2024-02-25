import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://localhost:3000/",
  monthlyConnection: [],
  getImg(imgName) {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  },
});
