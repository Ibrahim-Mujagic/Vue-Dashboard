<script>
import { Line } from "vue-chartjs";
import chartImports from "../data/chartImports.js";

export default {
  name: "MonthlyConnectionChartComp",
  components: {
    Line,
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
        elements: {
          line: {
            tension: 0.5,
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
        labels: this.chartElements.map((el) => el.month),
        datasets: [
          {
            label: "Monthly",
            backgroundColor: "rgba(151, 186, 192, 0.8)",
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
    <Line
      v-if="chartData"
      :data="chartData"
      :options="chartOptions"
      :style="chartStyles"
    />
  </div>
</template>

<style lang="scss" scoped>
.container-chart {
  max-height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
