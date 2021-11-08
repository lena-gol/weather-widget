<template>
    <div class="weather-widget">
        <keep-alive>
            <component :is="mode"></component>
        </keep-alive>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Cards from './components/Cards.vue';
    import Settings from './components/Settings.vue';

    export default Vue.extend({
        name: 'App',
        computed: {
            mode: {
                get(): string {
                    return this.$store.getters['settings/getSettingsMode'] ? 'settings' : 'cards';
                }
            }
        },
        components: {
            Cards,
            Settings
        },
        mounted() {
            if (this.$store.getters['cities/getCitiesCount'] !== 0) {
                const citiesID = this.$store.getters['cities/getCitiesID'].join(',');
                this.$store.dispatch('cities/reloadCities', citiesID);
            } else {
                this.$store.dispatch('cities/setDefaultCity');

                if (!('geolocation' in navigator)) {
                    return;
                }

                navigator.geolocation.getCurrentPosition(pos => {
                    this.$store.dispatch('cities/setDefaultCityByCoords', {
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude
                    });
                }, err => {
                    console.error(err.message);
                });
            }
        }
    });
</script>

<style lang="scss" scoped>
    .weather-widget {
        width: 100%;
        max-width: 270px;
        padding: 20px 15px;
        border: 1px solid $grey;
        font-size: 14px;
        font-family: Arial, sans-serif;
        color: $black;
        box-sizing: border-box;
    }
</style>
