// import Vue from "vue"
// import VueRouter from "vue-router"

// import Home from '../components/layout/Home'

// // import dataStore from '../store'

// Vue.use(VueRouter)

// export default new VueRouter({
//   mode: "history",
//   routes: [
//     { path: '/', component: Home },
//     { path: "*", redirect: "/" }
//   ]
// })

import { createWebHistory, createRouter } from "vue-router"
import Home from '../components/layout/Home'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   // lazy-loaded
  //   component: Profile,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;