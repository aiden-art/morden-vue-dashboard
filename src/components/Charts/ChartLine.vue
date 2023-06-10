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
    type: "line",
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
            color: "rgba(0, 0, 0, .2)",
            borderDash: [6],
          },
          ticks: {
            display: true,
            color: "#8C8C8C",
            font: {
              size: 14,
              lineHeight: 1.8,
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
            color: "#8C8C8C",
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

<style lang="scss" scoped></style>
