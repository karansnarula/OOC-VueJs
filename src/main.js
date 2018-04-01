import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'
import VModal from 'vue-js-modal'


Vue.config.productionTip = false

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)
Vue.use(VModal)

new Vue({
  el: '#shop',
  store,
  render: h => h(Shop)
})
