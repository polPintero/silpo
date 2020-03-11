import Vue from "vue";
import VueRouter from "vue-router";
import Silpo from "../views/Silpo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/silpo",
    name: "Silpo",
    component: Silpo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
