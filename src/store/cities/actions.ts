import {ActionTree} from 'vuex';
import {CitiesState, City, Coords} from './types';
import {RootState} from '../types';
import axios from 'axios';

export const actions: ActionTree<CitiesState, RootState> = {
    searchCityByName({commit, state}, payload: string): void {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=1d902c19926f4489c5f575151d902543`)
            .then((res => {
                const city = state.cities.find(city => city.id === res.data.id);
                if (city) {
                    commit('SET_INPUT_ERROR', 'City already exists');
                } else {
                    commit('CLEAR_INPUT_ERROR');
                    commit('ADD_CITY', res.data);
                }
            }))
            .catch(err => {
                try {
                    commit('SET_INPUT_ERROR', err.response.data.message);
                } catch (e) {
                    commit('SET_INPUT_ERROR', 'Service unavailable, try again later');
                } finally {
                    console.log(err);
                }
            });
    },
    setDefaultCity({commit}): void {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=1d902c19926f4489c5f575151d902543`)
            .then((res => {
                commit('REPLACE_CITIES', res.data);
            }))
            .catch(err => {
                console.log(err);
            });
    },
    setDefaultCityByCoords({commit}, payload: Coords): void {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=1d902c19926f4489c5f575151d902543`)
            .then((res => {
                commit('REPLACE_CITIES', res.data);
            }))
            .catch(err => {
                console.log(err);
            });
    },
    removeCity({commit}, payload: number): void {
        commit('REMOVE_CITY', payload);
    },
    sortCities({commit}, payload: Array<City>): void {
        commit('SET_CITIES', payload);
    },
    reloadCities({commit}, payload: string): void {
        axios.get(`https://api.openweathermap.org/data/2.5/group?id=${payload}&units=metric&appid=1d902c19926f4489c5f575151d902543`)
            .then((res => {
                commit('SET_CITIES', res.data.list);
            }))
            .catch(err => {
                console.log(err);
            });
    },
    setAddCityError({commit}, payload: string): void {
        commit('SET_INPUT_ERROR', payload);
    }
};
