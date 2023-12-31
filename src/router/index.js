import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
