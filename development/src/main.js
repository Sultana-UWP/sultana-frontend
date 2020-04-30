import Vue from 'vue';
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import routes from './routes';
import App from './App.vue';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({routes});
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
