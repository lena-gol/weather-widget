<template>
    <div class="settings-items">
        <draggable v-model="cities" handle=".settings-items-i__move">
            <div class="settings-items-i" v-for="city in cities" :key="city.id" :city="city">
                <div class="settings-items-i__move">
                    <drag-icon/>
                </div>
                <div class="settings-items-i__name">{{city.name}}, {{city.sys.country}}</div>
                <div class="settings-items-i__delete" @click="removeItem(city.id)">
                    <delete-icon/>
                </div>
            </div>
        </draggable>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import draggable from 'vuedraggable'
    import {CitiesState} from '../store/cities/types';
    import DragIcon from './../assets/icons/menu.svg';
    import DeleteIcon from './../assets/icons/trash.svg';

    export default Vue.extend({
        name: 'SettingsItems',
        computed: {
            cities: {
                get(): CitiesState {
                    return this.$store.getters['cities/getCities'];
                },
                set(value): void {
                    this.$store.dispatch('cities/sortCities', value);
                }
            }
        },
        methods: {
            removeItem(id: number): void {
                this.$store.dispatch('cities/removeCity', id);
            }
        },
        components: {
            draggable,
            DragIcon,
            DeleteIcon
        }
    });
</script>

<style lang="scss" scoped>
    .settings-items {
        margin-bottom: 40px;

        &-i {
            display: flex;
            margin-bottom: 20px;
            padding: 10px 5px;
            align-items: center;
            justify-content: center;
            background-color: $grey-light;

            &__move {
                display: flex;
                width: 35px;
                margin-right: 10px;
                flex: 0 0 35px;
                align-items: center;
                justify-content: center;
                cursor: move;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            &__name {
                flex: 1 1 auto;
            }

            &__delete {
                display: flex;
                width: 35px;
                flex: 0 0 35px;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &:hover {

                    svg {
                        color: $red;
                    }
                }

                svg {
                    width: 20px;
                    height: 20px;
                    transition: all .3s ease;
                }
            }
        }
    }
</style>
