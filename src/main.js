import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPeopleCarry, faBinoculars, faCameraRetro, faCat, faCloudSun, faCouch, faDragon, faFeatherAlt, faFighterJet, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
library.add(faPeopleCarry, faBinoculars, faCameraRetro, faCat, faCloudSun, faCouch, faDragon, faFeatherAlt, faFighterJet, faArrowCircleLeft, faArrowCircleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app');
