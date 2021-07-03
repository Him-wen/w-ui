import Vue from 'vue'
import App from './App.vue'
import WButton from './components/button';

Vue.component(WButton.name, WButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
