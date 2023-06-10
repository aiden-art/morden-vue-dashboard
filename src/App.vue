<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/Default.vue";
import DashboardLayout from "@/layouts/Dashboard.vue";
import DashboardRTLLayout from "@/layouts/DashboardRTL.vue";
const route = useRoute();
const layoutMap = {
  default: DefaultLayout,
  dashboard: DashboardLayout,
  "dashboard-rtl": DashboardRTLLayout,
};
const layout = computed(() => {
  return layoutMap[
    route.meta.layout as "default" | "dashboard" | "dashboard-rtl"
  ];
});
</script>

<style lang="scss"></style>
