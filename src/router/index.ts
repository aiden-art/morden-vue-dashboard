import type { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { Router } from "vue-router";
import { constantRouterMap } from "@/router/router.config";
console.log("main.ts...", "load router");
const router: Router = createRouter({
  history: createWebHistory("/"),
  routes: constantRouterMap as RouteRecordRaw[],
});

//路由导航冗余报错（路由重复）
const originalPush = router.push;
router.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err);
};

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
