import {MutationTree} from 'vuex';
import {CitiesState, City} from './types';

const setStorage = (label: string, value: any) => {
    localStorage.setItem(label, JSON.stringify(value));
};

export const mutations: MutationTree<CitiesState> = {
    ADD_CITY(state, payload: City): void {
        state.cities.push(payload);
        setStorage('cities', state.cities);
    },
    REMOVE_CITY(state, payload: number): void {
        state.cities = state.cities.filter((city) => city.id !== payload);
        setStorage('cities', state.cities);
    },
    SET_CITIES(state, payload: Array<City>): void {
        state.cities = payload;
        setStorage('cities', state.cities);
    },
    REPLACE_CITIES(state, payload: City): void {
        state.cities = [payload];
        setStorage('cities', state.cities);
    },
    SET_INPUT_ERROR(state, payload: string): void {
        state.addCityError = payload;
    },
    CLEAR_INPUT_ERROR(state): void {
        state.addCityError = '';
    }
};
