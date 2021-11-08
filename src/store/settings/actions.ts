import {ActionTree} from 'vuex';
import {SettingsState} from './types';
import {RootState} from '../types';

export const actions: ActionTree<SettingsState, RootState> = {
    toggleMode({commit}): void {
        commit('TOGGLE_MODE');
    }
};
