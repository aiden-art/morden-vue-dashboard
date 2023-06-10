<template>
  <div>
    <a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
      <DefaultHeader></DefaultHeader>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <DefaultFooter></DefaultFooter>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultHeader from "@/components/Headers/DefaultHeader.vue";
import DefaultFooter from "@/components/Footers/DefaultFooter.vue";
const route = useRoute();
const layoutClass = computed(() => {
  return route.meta.layoutClass;
});
</script>
