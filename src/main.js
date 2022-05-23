import Vue from 'vue'
import App from './App.vue'
//不显示生产环境提示
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')