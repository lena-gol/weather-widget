<template>
    <div class="cards">
        <div class="cards__settings-btn" @click="changeMode">
            <settings-icon/>
        </div>
        <div class="cards__items">
            <cards-item v-for="city in cities" :key="city.id" :city="city"></cards-item>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {CitiesState} from '../store/cities/types';
    import CardsItem from './CardsItem.vue';
    import SettingsIcon from './../assets/icons/settings.svg';

    export default Vue.extend({
        name: 'Cards',
        computed: {
            cities: {
                get(): CitiesState {
                    return this.$store.getters['cities/getCities'];
                }
            }
        },
        methods: {
            changeMode(): void {
                this.$store.dispatch('settings/toggleMode');
            }
        },
        components: {
            CardsItem,
            SettingsIcon
        }
    });
</script>

<style lang="scss" scoped>
    .cards {
        position: relative;

        &__settings-btn {
            position: absolute;
            top: -15px;
            right: -10px;
            display: flex;
            width: 35px;
            height: 35px;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:hover {

                svg {
                    color: $orange;
                }
            }

            svg {
                width: 24px;
                height: 24px;
                transition: all .3s ease;
            }
        }
    }
</style>
