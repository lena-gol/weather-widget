import Vue from 'vue';

Vue.filter('capitalize', (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('kelvinToCelsius', (value: number) => {
    return Math.round(value - 273.15);
});

Vue.filter('celsius', (value: number) => {
    return `${Math.round(value)}°C`;
});

Vue.filter('meters', (value: number) => {
    return `${value.toFixed(1)}m/s`;
});

Vue.filter('pressure', (value: number) => {
    return `${value}hPA`;
});

Vue.filter('percent', (value: string) => {
    return `${value}%`;
});

Vue.filter('metersToKilometers', (value: number) => {
    return `${(value / 1000).toFixed(1)}km`;
});
