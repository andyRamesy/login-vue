import type { RouteRecordRaw } from "vue-router";

const routes = <Array<RouteRecordRaw>>[
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Auth/Login/index.vue"),
    },
];

export default routes;
