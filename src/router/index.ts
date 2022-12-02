import {
    createRouter,
    createWebHistory,
    Router,
    // RouteLocationNormalized,
} from "vue-router";
import routes from "./routes";


const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
