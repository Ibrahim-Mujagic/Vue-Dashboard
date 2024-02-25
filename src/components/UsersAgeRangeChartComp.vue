<script>
import { Bar } from "vue-chartjs";
import chartImports from "../data/chartImports.js";

export default {
  name: "UsersAgeRangeChartComp",
  components: {
    Bar,
  },
  props: {
    chartElements: Array,
  },
  data() {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      chartStyles: {
        height: "300px",
        position: "relative",
      },
    };
  },
  methods: {
    generateData() {
      this.chartData = {
        labels: this.chartElements.map((el) => el.range),
        datasets: [
          {
            backgroundColor: [
              "#3E95CD",
              "#8E5EA3",
              "#5ABB9F",
              "#E8C3B9",
              "#B75D57",
              "#2A4054",
            ],
            data: this.chartElements.map((el) => el.connections),
            fill: true,
          },
        ],
      };
    },
  },
  mounted() {
    this.generateData();
    console.log(this.chartElements);
  },
};
</script>

<template>
  <div class="container-chart">
    <div class="chart-header">
      <h4>Monthly Connections</h4>
    </div>
    <div class="chart-body">
      <Bar
        v-if="chartData"
        :data="chartData"
        :options="chartOptions"
        :style="chartStyles"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
