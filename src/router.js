import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Project from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Project },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL), // Use VITE_BASE_URL
  routes
});

export default router;
