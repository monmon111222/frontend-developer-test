import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Bonnie | Front-end Developer" },
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  document.documentElement.scrollTop = 0;
  next();
});
export default router;
