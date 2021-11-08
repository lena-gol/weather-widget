import {GetterTree} from 'vuex';
import {CitiesState} from './types';
import {RootState} from '../types';

export const getters: GetterTree<CitiesState, RootState> = {
    getCities(state): Array<object> {
        return state.cities;
    },
    getCitiesCount(state): number {
        return state.cities.length;
    },
    getCitiesID(state): Array<number> {
        return state.cities.map(city => city.id);
    },
    getAddCityError(state): string {
        return state.addCityError;
    }
};
