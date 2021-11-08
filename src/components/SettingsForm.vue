<template>
    <div class="settings-form">
        <div class="settings-form__title">Add Location:</div>
        <form class="settings-form__form" @submit.prevent="handleSubmit">
            <input class="settings-form__input" type="text" v-model="cityName">
            <button class="settings-form__submit" type="submit">
                <enter-icon/>
            </button>
            <div class="settings-form__error">{{inputError | capitalize}}</div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import EnterIcon from './../assets/icons/enter.svg';

    export default Vue.extend({
        name: 'SettingsForm',
        data() {
            return {
                cityName: ''
            }
        },
        computed: {
            inputError: {
                get(): string {
                    return this.$store.getters['cities/getAddCityError'];
                }
            }
        },
        methods: {
            handleSubmit(): void {
                if (this.cityName === '') {
                    this.$store.dispatch('cities/setAddCityError', 'Input field must not be empty');
                    return;
                }
                this.$store.dispatch('cities/searchCityByName', this.cityName);
                this.cityName = '';
            }
        },
        components: {
            EnterIcon
        }
    });
</script>

<style lang="scss" module>
    .settings-form {

        &__title {
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: 600;
        }

        &__form {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        &__input {
            width: calc(100% - 40px);
            min-width: 0;
            padding: 7px 7px;
            flex: 0 0 calc(100% - 40px);
            border: 1px solid $grey;
            border-radius: 3px;
            box-shadow: none;
            outline: none;
            appearance: none;
            transition: all .3s ease;
            box-sizing: border-box;

            &:focus,
            &:hover {
                border-color: $blue;
            }
        }

        &__submit {
            display: flex;
            width: 35px;
            height: 35px;
            margin-left: 5px;
            padding: 0;
            flex: 0 0 35px;
            align-items: center;
            justify-content: center;
            border: 0;
            box-shadow: none;
            background: transparent;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {

                svg {
                    color: $orange;
                }
            }

            svg {
                width: 20px;
                height: 20px;
                transition: all .3s ease;
            }
        }

        &__error {
            width: 100%;
            margin-top: 2px;
            color: $red;
            font-size: 12px;
        }
    }
</style>
