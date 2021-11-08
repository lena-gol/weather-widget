import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from './types';
import {settings} from './settings';
import {cities} from './cities';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        settings,
        cities
    },
};

export default new Vuex.Store<RootState>(store);
