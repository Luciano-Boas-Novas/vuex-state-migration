import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import { useEcommerceStore } from './store.js'; // <== IMPORTA AQUI

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component('base-badge', BaseBadge);

// Agora que o Pinia já está ativo, podemos usar o store
router.beforeEach((to) => {
    const store = useEcommerceStore(); 
    if (to.meta.requiresAuth && !store.isLoggedIn) {
        return '/products'; 
    }
});

app.mount('#app');
