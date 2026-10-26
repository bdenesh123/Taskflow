import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardPage,
        },
        {
          path: "projects",
          name: "projects",
          component: ProjectsPage,
        },
        {
          path: "projects/:projectId",
          name: "project-details",
          component: ProjectDetailsPage,
          props: true,
        },
      ],
    },
  ],
});

export default router;
