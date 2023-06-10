let constantRouterMap = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    layout: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
  },
  {
    path: "/layout",
    name: "Layout",
    layout: "dashboard",
    component: () => import("@/views/Layout.vue"),
  },
  {
    path: "/tables",
    name: "Tables",
    layout: "dashboard",
    component: () => import("@/views/Tables.vue"),
  },
  {
    path: "/billing",
    name: "Billing",
    layout: "dashboard",
    component: () => import("@/views/Billing.vue"),
  },
  {
    path: "/rtl",
    name: "RTL",
    layout: "dashboard-rtl",
    meta: {
      layoutClass: "dashboard-rtl",
    },
    component: () => import("@/views/RTL.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    layout: "dashboard",
    meta: {
      layoutClass: "layout-profile",
    },
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/sign-in",
    name: "Sign-In",
    component: () => import("@/views/Sign-In.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign-Up",
    meta: {
      layoutClass: "layout-sign-up",
    },
    component: () => import("@/views/Sign-Up.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    hidden: true,
  },
];

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route: any, parentLayout = "default") {
  route.meta = route.meta || {};
  route.meta.layout = route.layout || parentLayout;

  if (route.children) {
    route.children = route.children.map((childRoute: any) =>
      addLayoutToRoute(childRoute, route.meta.layout)
    );
  }
  return route;
}

constantRouterMap = constantRouterMap.map((route) => addLayoutToRoute(route));

export { constantRouterMap };
