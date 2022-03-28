import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
// import store from './store'
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
//每个Vue实列的原型对象上都有$emit和$on
Vue.prototype.$bus = new Vue()

Vue.use(Antd);
new Vue({
  router,
  // store,s
  render: (h) => h(App),
}).$mount("#app");
