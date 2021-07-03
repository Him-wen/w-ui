import Vue from "vue";
import App from "./App.vue";
import WButton from './components/button';
import WDialog from './components/dialog';

Vue.component(WButton.name, WButton);
Vue.component(WDialog.name, WDialog);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
