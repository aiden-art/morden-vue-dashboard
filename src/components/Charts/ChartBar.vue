<template>
  <div>
    <canvas ref="chartRef" :style="{ height: height + 'px' }"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onDeactivated } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const props = defineProps(["data", "height"]);
const chartRef = ref<any>(null);
const charter = ref<any>(null);
onMounted(() => {
  let ctx = chartRef.value?.getContext("2d");
  charter.value = new Chart(ctx, {
    type: "bar",
    data: props.data,
    options: {
      layout: {
        padding: {
          top: 30,
          right: 15,
          left: 10,
          bottom: 5,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            display: true,
            color: "rgba(255, 255, 255, .2)",
            borderDash: [6],
          },
          ticks: {
            display: true,
            color: "#fff",
            font: {
              size: 14,
              lineHeight: 1.5,
              weight: "600",
              family: "Open Sans",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            color: "#fff",
            font: {
              size: 14,
              lineHeight: 1.5,
              weight: "600",
              family: "Open Sans",
            },
          },
        },
      },
    },
  });
});
onDeactivated(() => {
  charter.value?.destroy();
});
</script>

<style lang="scss" scoped>
canvas {
  background-image: linear-gradient(to right, #00369e, #005cfd, #a18dff);
}
</style>
