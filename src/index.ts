import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from './App.vue';
import store from './store/index';
import './filters/index';

Vue.config.productionTip = false;

Vue.use(vueCustomElement);

Vue.customElement('weather-widget', new App().$options, {
    beforeCreateVueInstance(RootComponentDefinition) {
        return {...RootComponentDefinition, store};
    },
});
