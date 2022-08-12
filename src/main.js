// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'


// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')

import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import titleMixin from './mixins/titleMixin'

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
// import BaseDialogue from './components/ui/BaseDialogue.vue';

Vue.mixin(titleMixin)

const BaseDialogue = defineAsyncComponent(() => import('./components/ui/BaseDialogue.vue'));

const app = createApp(App); 

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialogue', BaseDialogue);

app.mount('#app');
