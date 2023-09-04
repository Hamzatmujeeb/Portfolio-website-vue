
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance

const app = createApp(App);

app.use(router); // Use Vue Router

app.mount('#app');