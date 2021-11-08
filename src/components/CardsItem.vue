<template>
    <div class="cards-i">
        <div class="cards-i__city">{{city.name}}, {{city.sys.country}}</div>
        <div class="cards-i__weather">
            <div class="cards-i__image">
                <img :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`"
                     width="100"
                     height="100"
                     alt=""
                     title="">
            </div>
            <div class="cards-i__temp">{{city.main.temp | celsius}}</div>
        </div>
        <div class="cards-i__description">
            <span v-if="city.main.feels_like">Feels like {{city.main.feels_like | celsius}}.</span>
            <span v-if="city.weather[0].description">{{city.weather[0].description | capitalize}}.</span>
            <span v-if="windSpeed">{{windSpeed}}.</span>
        </div>
        <div class="cards-i-metrics">
            <div class="cards-i-metrics-i">
                <wind-icon :style="{ transform: 'rotate('+ (city.wind.deg + 180)+'deg)'}"/>
                <span>{{city.wind.speed | meters}} {{windDirection}}</span>
            </div>
            <div class="cards-i-metrics-i">
                <pressure-icon/>
                <span>{{city.main.pressure | pressure}}</span>
            </div>
            <div class="cards-i-metrics-i">
                Humidity: {{city.main.humidity | percent}}
            </div>
            <div class="cards-i-metrics-i">
                Dew point: {{dewPoint | celsius}}
            </div>
            <div class="cards-i-metrics-i">
                Visibility: {{city.visibility | metersToKilometers}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import WindIcon from './../assets/icons/wind.svg';
    import PressureIcon from './../assets/icons/pressure.svg';
    import windDirectionList from '../lists/windDirection';
    import windSpeedList from '../lists/windSpeed';

    export default Vue.extend({
        name: 'App',
        props: {
            city: {
                type: Object,
                required: true
            }
        },
        computed: {
            dewPoint: {
                get(): number {
                    return this.city.main.temp - (100 - this.city.main.humidity) / 5; // approximately
                }
            },
            windDirection: {
                get(): string {
                    const direction = windDirectionList.find(dir => {
                        return this.city.wind.deg >= dir.interval[0] && this.city.wind.deg <= dir.interval[1];
                    });
                    return direction ? direction.name : '';
                }
            },
            windSpeed: {
                get(): string {
                    const speed = windSpeedList.find(wind => {
                        return this.city.wind.speed >= wind.interval[0] && this.city.wind.speed <= wind.interval[1];
                    });
                    return speed ? speed.name : '';
                }
            }
        },
        components: {
            WindIcon,
            PressureIcon
        }
    });
</script>

<style lang="scss" scoped>
    .cards-i {
        margin-bottom: 50px;

        &:first-child {

            .cards-i__city {
                padding-right: 40px;
            }
        }

        &:last-child {
            margin-bottom: 0;
        }

        &__city {
            margin-bottom: 10px;
            font-weight: 600;
        }

        &__weather {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }

        &__image {
            width: 100px;
            margin-right: 15px;
            flex: 0 0 100px;
        }

        &__temp {
            font-size: 32px;
            font-weight: 600;
        }

        &__description {
            margin-bottom: 10px;
        }

        &-metrics {
            display: flex;
            width: 100%;
            align-items: center;
            flex-wrap: wrap;

            &-i {
                display: flex;
                margin-bottom: 10px;
                flex: 1 1 50%;
                align-items: center;
                white-space: nowrap;

                svg {
                    width: 12px;
                    height: 12px;
                    flex: 0 0 12px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
