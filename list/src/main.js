import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// 建 Vue 
const app = createApp(App);


app.use(store);

// 連接
app.mount('#app');
