import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobComp } from "@/core/registerGlobComp";
import { setupRouter } from "@/router";
import "@/scss/app.scss";
import "ant-design-vue/dist/antd.variable.css";

const app = createApp(App);

setupRouter(app);

app.use(registerGlobComp).mount("#app");
