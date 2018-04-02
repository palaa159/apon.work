import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner, faSearch, faShoppingCart, faShoppingBag, faTimes, faMinus, faPlus } from '@fortawesome/fontawesome-free-solid'
import { faFrown } from '@fortawesome/fontawesome-free-regular'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal/dist/ssr.index'
import Transitions from 'vue2-transitions'
import moment from 'moment'
require('moment/locale/th')

Vue.use(VueScrollTo)
Vue.use(VeeValidate)
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/loading.gif',
  attempt: 1
})
Vue.use(require('vue-moment'), {
  moment
})
Vue.use(VModal)
Vue.use(Transitions)
fontawesome.library.add(faSpinner, faSearch, faShoppingCart, faShoppingBag, faFrown, faTimes, faMinus, faPlus)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)