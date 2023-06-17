import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes';

import './assets/style/main.scss'



const app = createApp(App);

app.use(routes);
app.mount('#app');
