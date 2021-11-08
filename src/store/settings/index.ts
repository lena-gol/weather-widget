import {Module} from 'vuex';
import {RootState} from '../types';
import {SettingsState} from './types';
import {getters} from './getters';
import {mutations} from './mutations';
import {actions} from './actions';

const state: SettingsState = {
    settingsMode: false
};

export const settings: Module<SettingsState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
