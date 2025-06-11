// main.js ou equivalente
import { createApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import { useEcommerceStore } from './store.js';

import router from './router.js';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

router.beforeEach((to) => {
  setActivePinia(pinia);
  const store = useEcommerceStore();
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    return '/products'; 
  }
});

app.mount('#app');
