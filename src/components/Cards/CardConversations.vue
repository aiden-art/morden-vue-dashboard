<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Conversations</h6>
    </template>
    <a-list
      class="conversations-list"
      item-layout="horizontal"
      :split="false"
      :data-source="data"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :title="item.title" :description="item.code">
            <template #avatar>
              <a-avatar
                slot="avatar"
                :size="48"
                shape="square"
                :src="item.avatar"
              />
            </template>
          </a-list-item-meta>
          <template #actions>
            <a-button type="link"> REPLY </a-button>
          </template>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>
