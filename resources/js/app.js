import './bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store' // ★　追加
import App from './App.vue'

const createApp = async () => {
    await store.dispatch('auth/currentUser')

    new Vue({
        el: '#app',
        router,
        store, // ★　追加
        components: { App },
        template: '<App />'
    })
}

createApp()
