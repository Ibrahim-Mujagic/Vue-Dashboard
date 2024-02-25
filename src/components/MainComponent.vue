<script>
import axios from "axios";
import { store } from "../data/store";
import chartImports from "../data/chartImports.js";
import MonthlyConnectionChartComp from "./MonthlyConnectionChartComp.vue";
import UsersAgeRangeChartComp from "./UsersAgeRangeChartComp.vue";
import DevicesChartComp from "./DevicesChartComp.vue";
export default {
  name: "MainComponent",
  components: {
    MonthlyConnectionChartComp,
    UsersAgeRangeChartComp,
    DevicesChartComp,
  },
  data() {
    return {
      store,
      typeDataNames: ["MonthlyConnections", "UsersAgeRange", "Devices"],
      MonthlyConnection: [],
      dataTypes: {
        MonthlyConnections: [],
        UsersAgeRange: [],
        Devices: [],
      },
      lineChartData: [],
      isLoaded: false,
    };
  },
  methods: {
    async getData(type) {
      try {
        const result = await axios.get(store.apiBaseUrl + type);
        if (this.typeDataNames.includes(type)) {
          this.dataTypes[type] = result.data;
        }
      } catch (error) {
        console.error(`errore - ${type}:`, error);
      }
    },
    async loadData() {
      try {
        await Promise.all([
          this.getData("MonthlyConnections"),
          this.getData("Devices"),
          this.getData("UsersAgeRange"),
        ]);
        this.isLoaded = true;
      } catch (error) {
        console.error("errore api:", error);
      }
    },
  },
  mounted() {
    this.loadData();
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
    <div class="main-body">
      <div class="container-connection-charts">
        <div class="container-monthly-connections">
          <MonthlyConnectionChartComp
            v-if="isLoaded"
            :chartElements="this.dataTypes.MonthlyConnections"
          />
        </div>
        <div class="container-userAge-devices-chart">
          <UsersAgeRangeChartComp
            v-if="isLoaded"
            :chartElements="this.dataTypes.UsersAgeRange"
          />
          <DevicesChartComp
            v-if="isLoaded"
            :chartElements="this.dataTypes.Devices"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: rgb(245, 241, 241);
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

  .container-connection-charts {
    padding: 20px;
    .container-userAge-devices-chart {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .container-chart {
        width: calc(50% - 40px);
        max-height: 320px;
      }
    }
  }
}
</style>
