<template>
    <div class="header">
        <div class="header__vehicles">
            <h1>Vehicles</h1>
            <p>{{ carsStore.total }}</p>
        </div>
        <div class="header__actions">
            <UIButton class="header__button" type="outlined">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
                        fill="#E86E84" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                        fill="#E86E84" />
                </svg>
            </UIButton>
            <div class="user">
                <img src="../../assets/photo.png" alt="user photo">
                <p>John Doe</p>
            </div>
            <UISelect :items="IconItems" :outlined="false" :active="selectedOption" @change="selectedOption = $event">
                <template #image>
                    <component :is="currentIcon"></component>
                </template>
            </UISelect>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, VueElement } from 'vue';
import UIButton from '../UI/UIButton.vue';
import UISelect from '../UI/UISelect.vue';
import { lang, IconItems } from '../UI/Icons/index.ts';
import { storeCars } from '../../stores/carsStore';

const carsStore = storeCars();

const selectedOption = ref<'En' | 'Ge' | "Po">('En');
const currentIcon = computed<VueElement>(() => {
    return lang[selectedOption.value];
});

</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);

    .header__vehicles {
        display: flex;
        align-items: center;
        gap: 20px;

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 14px;
            gap: 10px;
            border-radius: 6px;
            background: rgba(243, 246, 248, 1);
            height: 30px;

            font-size: 15px;
            font-weight: 700;
            line-height: 22px;
            color: rgba(41, 49, 72, 0.8);
        }
    }

    .header__actions,
    .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__actions {
        gap: 40px;

        .header__button:hover path {
            fill: #D90E32;
        }
    }

    .user {
        gap: 16px;
        font-size: 15px;
        font-weight: 500;
    }
}
</style>