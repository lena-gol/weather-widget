import {MutationTree} from 'vuex';
import {SettingsState} from './types';

export const mutations: MutationTree<SettingsState> = {
    TOGGLE_MODE(state): void {
        state.settingsMode = !state.settingsMode;
    }
};
