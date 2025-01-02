require('./bootstrap');

import { createApp } from 'vue';
import AppComponent from '../views/components/AppComponent.vue';

createApp({
	components:{
		AppComponent
	}
})
// .use(store)
.mount('#app');