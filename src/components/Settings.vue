<template>
    <div class="settings">
        <div class="settings__close-btn" v-if="citiesCount > 0" @click="changeMode">
            <close-icon/>
        </div>
        <div class="settings__title">Settings</div>
        <settings-items/>
        <settings-form/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import SettingsItems from './SettingsItems.vue';
    import SettingsForm from './SettingsForm.vue';
    import CloseIcon from './../assets/icons/close.svg';

    export default Vue.extend({
        name: 'Settings',
        computed: {
            citiesCount: {
                get(): number {
                    return this.$store.getters['cities/getCitiesCount'];
                }
            }
        },
        methods: {
            changeMode(): void {
                this.$store.dispatch('settings/toggleMode');
                this.$store.dispatch('cities/setAddCityError', '');
            }
        },
        components: {
            SettingsItems,
            SettingsForm,
            CloseIcon
        }
    });
</script>

<style lang="scss" scoped>
    .settings {
        position: relative;

        &__close-btn {
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
                width: 20px;
                height: 20px;
                transition: all .3s ease;
            }
        }

        &__title {
            margin-bottom: 20px;
            font-weight: 600;
        }
    }
</style>
