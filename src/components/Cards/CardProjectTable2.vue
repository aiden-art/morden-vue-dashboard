<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">Projects Table</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model="projectHeaderBtns" size="small">
            <a-radio-button value="all">ALL</a-radio-button>
            <a-radio-button value="online">ONLINE</a-radio-button>
            <a-radio-button value="stores">STORES</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'members'">
          <template v-for="member in record.members" :key="member">
            <a-avatar size="small" :src="member" />
          </template>
        </template>
        <template v-if="column.dataIndex === 'company'">
          <h6 class="m-0">
            <img
              :src="record.company.logo"
              width="25"
              style="margin-right: 10px"
            />
            {{ record.company.name }}
          </h6>
        </template>
        <template v-if="column.dataIndex === 'completion'">
          <div class="progress-right">
            <div class="text-right text-sm font-semibold text-muted pr-15">
              {{
                record.completion.value || record.completion.value == 0
                  ? record.completion.value
                  : record.completion
              }}%
            </div>
            <a-progress
              class="m-0"
              :percent="
                record.completion.value || record.completion.value == 0
                  ? record.completion.value
                  : record.completion
              "
              :show-info="false"
              size="small"
              :status="
                record.completion.status ? record.completion.status : 'normal'
              "
            />
          </div>
        </template>
        <template v-if="column.dataIndex === 'editBtn'">
          <a-button type="link" :data-id="record.key">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-gray-7"
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
              />
              <path
                class="fill-gray-7"
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
              />
            </svg>
          </a-button>
        </template>
      </template>
    </a-table>

    <div class="table-upload-btn">
      <a-button type="dashed" block>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289L13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z"
            fill="#111827"
          />
        </svg>
        Upload New Project
      </a-button>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ref } from "vue";

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array as PropType<any>,
    default: () => [],
  },
});

const projectHeaderBtns = ref("all");
</script>
