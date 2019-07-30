import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import "./element-variables.scss";

import service from "./utils/request";

Vue.config.productionTip = false;
Vue.use(Element);

Vue.prototype.$http = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
