<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
        <CardAuthorTable
          :data="table1Data"
          :columns="table1Columns"
        ></CardAuthorTable>
      </a-col>
    </a-row>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
        <CardProjectTable2
          :data="table2Data"
          :columns="table2Columns"
        ></CardProjectTable2>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import CardAuthorTable from "@/components/Cards/CardAuthorTable.vue";
import CardProjectTable2 from "@/components/Cards/CardProjectTable2.vue";
const table1Columns = [
  {
    title: "AUTHOR",
    dataIndex: "author",
  },
  {
    title: "FUNCTION",
    dataIndex: "func",
  },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    dataIndex: "employed",
    class: "text-muted",
  },
  {
    title: "",
    dataIndex: "editBtn",
    width: 50,
  },
];

const table1Data = [
  {
    key: "1",
    author: {
      avatar: "/images/face-2.jpg",
      name: "Michael John",
      email: "michael@mail.com",
    },
    func: {
      job: "Manager",
      department: "Organization",
    },
    status: 1,
    employed: "23/04/18",
  },
  {
    key: "2",
    author: {
      avatar: "/images/face-3.jpg",
      name: "Alexa Liras",
      email: "alexa@mail.com",
    },
    func: {
      job: "Programator",
      department: "Developer",
    },
    status: 0,
    employed: "23/12/20",
  },
  {
    key: "3",
    author: {
      avatar: "/images/face-1.jpg",
      name: "Laure Perrier",
      email: "laure@mail.com",
    },
    func: {
      job: "Executive",
      department: "Projects",
    },
    status: 1,
    employed: "13/04/19",
  },
  {
    key: "4",
    author: {
      avatar: "/images/face-4.jpg",
      name: "Miriam Eric",
      email: "miriam@mail.com",
    },
    func: {
      job: "Marketing",
      department: "Organization",
    },
    status: 1,
    employed: "03/04/21",
  },
  {
    key: "5",
    author: {
      avatar: "images/face-5.jpeg",
      name: "Richard Gran",
      email: "richard@mail.com",
    },
    func: {
      job: "Manager",
      department: "Organization",
    },
    status: 0,
    employed: "23/03/20",
  },
  {
    key: "6",
    author: {
      avatar: "images/face-6.jpeg",
      name: "John Levi",
      email: "john@mail.com",
    },
    func: {
      job: "Tester",
      department: "Developer",
    },
    status: 0,
    employed: "14/04/17",
  },
];

const table2Columns = [
  {
    title: "COMPANIES",
    dataIndex: "company",
    width: 300,
  },
  {
    title: "BUDGET",
    dataIndex: "budget",
    class: "font-semibold text-muted",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    class: "font-semibold text-muted text-sm",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
  {
    title: "",
    dataIndex: "editBtn",
    width: 50,
  },
];

const table2Data = [
  {
    key: "1",
    company: {
      name: "Spotify Version",
      logo: "/images/logos/logo-spotify.svg",
    },
    status: "working",
    budget: "$14,000",
    completion: 60,
  },
  {
    key: "2",
    company: {
      name: "Progress Track",
      logo: "/images/logos/logo-atlassian.svg",
    },
    status: "working",
    budget: "$3,000",
    completion: 10,
  },
  {
    key: "3",
    company: {
      name: "Jira Platform Errors",
      logo: "/images/logos/logo-slack.svg",
    },
    status: "done",
    budget: "Not Set",
    completion: {
      status: "success",
      value: 100,
    },
  },
  {
    key: "4",
    company: {
      name: "Launch new Mobile App",
      logo: "/images/logos/logo-spotify.svg",
    },
    status: "canceled",
    budget: "$20,600",
    completion: {
      status: "exception",
      value: 50,
    },
  },
  {
    key: "5",
    company: {
      name: "Web Dev",
      logo: "images/logos/logo-webdev.svg",
    },
    status: "working",
    budget: "$4,000",
    completion: 80,
  },
  {
    key: "6",
    company: {
      name: "Redesign Online Store",
      logo: "/LICENSEimages/logos/logo-invision.svg",
    },
    status: "canceled",
    budget: "$2,000",
    completion: {
      status: "exception",
      value: 0,
    },
  },
];
</script>

<style lang="scss"></style>
