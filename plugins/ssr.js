import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal/dist/ssr.index'
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
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
