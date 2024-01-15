// 빌드를 시작할 때 가장 처음 불러오는 진입지점
// 해당 파일에서 app파일을 불러와 vue 객체를 생성하고 app 바인딩
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
