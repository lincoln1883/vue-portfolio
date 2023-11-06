import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub, faTwitter, faInstagram, faJs, faVuejs);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
