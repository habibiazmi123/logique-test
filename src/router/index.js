import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Result from "@/views/Result.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Result",
    path: "/result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
