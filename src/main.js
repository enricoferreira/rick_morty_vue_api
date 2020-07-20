import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import highchartsVue from 'highcharts-vue';
import vueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false

Vue.component('ToolBar', ()=>import('./components/ToolBar.vue'));

Vue.use(highchartsVue);
Vue.use(vueApexCharts);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
