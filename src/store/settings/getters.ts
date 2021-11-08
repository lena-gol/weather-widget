import {GetterTree} from 'vuex';
import {SettingsState} from './types';
import {RootState} from '../types';

export const getters: GetterTree<SettingsState, RootState> = {
    getSettingsMode(state): Boolean {
        return state.settingsMode;
    }
};
