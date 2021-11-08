import {Module} from 'vuex';
import {RootState} from '../types';
import {CitiesState} from './types';
import {getters} from './getters';
import {mutations} from './mutations';
import {actions} from './actions';

const state: CitiesState = {
    cities: JSON.parse(localStorage.getItem('cities') || '[]'),
    addCityError: ''
};

export const cities: Module<CitiesState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
