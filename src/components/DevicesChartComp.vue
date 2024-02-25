<script>
import { Doughnut } from "vue-chartjs";
import chartImports from "../data/chartImports.js";

export default {
  name: "DevicesChartComp",
  components: {
    Doughnut,
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
        aspectRatio: 2,
        plugins: {
          legend: {
            display: true,
            position: "right",
            align: "center",
            labels: {
              padding: 16,
            },
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
        labels: this.chartElements.map((el) => el.os),
        datasets: [
          {
            label: "Monthly Connections",
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
  },
};
</script>

<template>
  <div class="container-chart">
    <div class="chart-header">
      <h4>Monthly Connections</h4>
    </div>
    <div class="chart-body">
      <Doughnut
        v-if="chartData"
        :data="chartData"
        :options="chartOptions"
        :style="chartStyles"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-chart {
  .chart-body {
    display: flex;
    justify-content: center;
  }
}
</style>
