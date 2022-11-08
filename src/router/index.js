import Vue from "vue";
import VueRouter from "vue-router";
const Header = () => import("@/components/common/Header.vue");

Vue.use(VueRouter);
const router = new VueRouter({
  //mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/quote",
    },
    {
      path: "/quote",
      name: "quote",
      components: {
        Header,
        contents: () => import("@/views/quote/CoinQuote.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/buy",
      name: "buy",
      components: {
        Header,
        contents: () => import("@/views/buy/BuyCoin.vue"),
      },
      meta: { unauthorized: true },
    },
    //404
    {
      path: "*",
      name: "pageNotFound",
      component: () => import("@/views/error/NotFoundPage.vue"),
      meta: { unauthorized: true },
    },
  ],
});

export default router;
