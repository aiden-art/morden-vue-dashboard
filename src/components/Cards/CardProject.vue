<template>
  <a-card class="card-project">
    <template #cover>
      <img alt="example" :src="cover" />
    </template>

    <div class="card-tag">Project #{{ id }}</div>
    <h5>{{ title }}</h5>
    <p>
      {{ content }}
    </p>
    <a-row type="flex" :gutter="6" class="card-footer" align="middle">
      <a-col :span="12">
        <a-button size="small">VIEW PROJECT</a-button>
      </a-col>
      <a-col :span="12" class="text-right">
        <a-space :size="-12" class="avatar-chips">
          <a-avatar
            size="small"
            v-for="(img, index) in team"
            :key="index"
            :src="img"
          />
        </a-space>
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
    default: "",
  },
  team: {
    type: Array as PropType<any>,
    default: () => [],
  },
});
</script>
