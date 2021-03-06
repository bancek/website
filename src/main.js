// this is common Vue initialization for index.js and embed.js (app entrypoints)

import Vue from 'vue'
import { LayoutPlugin, TabsPlugin, BTable, FormTextareaPlugin, BFormSelect, TooltipPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './filters'
import './directives'

Vue.use(LayoutPlugin)
Vue.use(TabsPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(TooltipPlugin)
Vue.component('b-table', BTable)
Vue.component('b-form-select', BFormSelect)

// fontawesome
library.add(faSpinner, faGlobe, faCaretDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
