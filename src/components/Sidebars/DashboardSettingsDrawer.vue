<template>
  <a-drawer
    class="settings-drawer"
    :class="[rtl ? 'settings-drawer-rtl' : '']"
    :placement="rtl ? 'left' : 'right'"
    :closable="false"
    :visible="showSettingsDrawer"
    width="360"
    :getContainer="() => wrapper"
    @close="$emit('toggleSettingsDrawer', false)"
  >
    <a-button
      type="link"
      class="btn-close"
      @click="$emit('toggleSettingsDrawer', false)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="9"
        viewBox="0 0 9 9"
      >
        <g id="close" transform="translate(0.75 0.75)">
          <path
            id="Path"
            d="M7.5,0,0,7.5"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <path
            id="Path-2"
            data-name="Path"
            d="M0,0,7.5,7.5"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
        </g>
      </svg>
    </a-button>
    <div class="drawer-content">
      <h6>Configurator</h6>
      <p>See our dashboard options.</p>
      <hr />
      <div class="sidebar-color">
        <h6>Sidebar Color</h6>
        <a-radio-group
          v-model="sidebarColorModel"
          @change="$emit('updateSidebarColor', $event.target.value)"
          defaultValue="primary"
        >
          <a-radio-button value="primary" class="bg-primary"></a-radio-button>
          <a-radio-button
            value="secondary"
            class="bg-secondary"
          ></a-radio-button>
          <a-radio-button value="success" class="bg-success"></a-radio-button>
          <a-radio-button value="danger" class="bg-danger"></a-radio-button>
          <a-radio-button value="warning" class="bg-warning"></a-radio-button>
          <a-radio-button value="black" class="bg-dark"></a-radio-button>
        </a-radio-group>
      </div>
      <div class="sidenav-type">
        <h6>Sidenav Type</h6>
        <p>Choose between 2 different sidenav types.</p>
        <a-radio-group
          button-style="solid"
          v-model="sidebarThemeModel"
          @change="$emit('updateSidebarTheme', $event.target.value)"
          defaultValue="primary"
        >
          <a-radio-button value="light">TRANSPARENT</a-radio-button>
          <a-radio-button value="white">WHITE</a-radio-button>
        </a-radio-group>
      </div>
      <div class="navbar-fixed">
        <h6>Navbar Fixed</h6>
        <a-switch
          default-checked
          :checked="navbarFixedModel"
          @change="$emit('toggleNavbarPosition', !navbarFixedModel)"
        />
      </div>
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const props = defineProps({
  showSettingsDrawer: {
    type: Boolean,
    default: false,
  },
  sidebarColor: {
    type: String,
    default: "primary",
  },
  sidebarTheme: {
    type: String,
    default: "light",
  },
  navbarFixed: {
    type: Boolean,
    default: false,
  },
  rtl: {
    type: Boolean,
    default: false,
  },
});
const wrapper = ref<any>(document.body);
const sidebarColorModel = ref(props.sidebarColor);
const sidebarThemeModel = ref(props.sidebarTheme);
const navbarFixedModel = ref(props.navbarFixed);
watch(
  () => props.navbarFixed,
  () => {
    navbarFixedModel.value = props.navbarFixed;
  }
);

onMounted(() => {
  wrapper.value = document.getElementById("layout-dashboard");
});
</script>
