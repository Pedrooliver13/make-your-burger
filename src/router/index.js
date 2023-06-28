import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Requests from "../views/requests.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/requests",
    name: "Requests",
    component: Requests,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
