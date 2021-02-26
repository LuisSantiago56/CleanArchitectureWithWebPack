import "@babel/polyfill";

//import Vue from 'vue/dist/vue.js'
import Vue from 'vue'; 
import App from './App.vue';
Vue.use(App);

import Router from 'vue-router'
Vue.use(Router)
import routes from './routes'
const router = new Router({ routes })

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import axios from 'axios';
windos.axios = axios;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data.headers)]{
    if ("Content-Type" in headers) {
        return data
    }
    var str = [];
    for (var p in data)
        if (data.hasOwnProperty(p) && data[p]) {
            st.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
    return str.join("&");
}];

const app = new Vue({
    router,
    components: { App },
    render: h => h(App),
    el: '#app',
})