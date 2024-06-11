<template>
    <div class="main__view">
        <div class="main__view__filters">
            <div class="filters">
                <div class="search">
                    <input type="text" placeholder="Search VIN" v-model="carsStore.query.search"
                        @keydown.enter="carsStore.getCarsByVin()">
                    <div class="clear">
                        <svg v-if="carsStore.query.search" @click="clearSearch()" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
                                fill="#E86E84" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                fill="#E86E84" />
                        </svg>
                    </div>
                    <img @click="carsStore.getCarsByVin()" src="../../assets/zoom.svg" alt="search">
                </div>
                <div class="select-count">
                    <p>Select vehicles per page:</p>
                    <UISelect :items="countItems" outlined :active="String(carsStore.query.per_page)"
                        @change="carsStore.query.per_page = Number($event)"></UISelect>
                </div>
            </div>
            <div class="add">
                <UIButton type="filled">
                    <img src="../../assets/plus.svg" alt="plus">
                    <p>Add vechicle</p>
                </UIButton>
            </div>
        </div>
        <div v-if="carsStore.cars.length" class="main__view__content">
            <VechicleCard v-for="car in carsStore.cars" :key="car.vin" :car="car"></VechicleCard>
        </div>
        <div v-else class="main__view__content no-cars">
            <p>No cars found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UIButton from '../UI/UIButton.vue';
import UISelect from '../UI/UISelect.vue';
import { storeCars } from '../../stores/carsStore';
import VechicleCard from './VechicleCard.vue';

const carsStore = storeCars();

const countItems = ref([
    {
        title: '3',
        value: 3
    },
    {
        title: '6',
        value: 6
    },
    {
        title: '9',
        value: 9
    },
    {
        title: '12',
        value: 12
    },
    {
        title: '15',
        value: 15
    }
]);

function clearSearch() {
    carsStore.query.search = '';
    carsStore.getCars();
}

</script>

<style scoped lang="scss">
$card-width: 354px;

.main__view {
    display: flex;
    flex-direction: column;
    padding: 30px;

    &__filters {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img,
        svg {
            cursor: pointer;
        }

        .filters {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: rgba(41, 49, 72, 0.8);

            display: flex;
            gap: 30px;

            .search {
                height: 42px;
                max-width: 400px;
                border: 1px solid rgba(228, 228, 228, 1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                padding: 0 15px;
                gap: 10px;

                input {
                    border: none;
                    outline: none;
                    width: 100%;

                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    color: rgba(41, 49, 72, 0.8);
                }
            }

            .clear {
                display: flex;
                align-items: center;
                width: 24px;

                svg {
                    transform: rotate(45deg);
                }
            }

            .select-count {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }

        @media (width < 1100px) {
            flex-direction: column;
            align-items: flex-start;

            .filters {
                flex-direction: column;
                margin-bottom: 20px;
                gap: 20px;
            }
        }
    }

    .main__view__content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, $card-width);
        gap: 30px;
        margin-top: 30px;
        justify-content: center;

        @media (width > 1800px) {
            grid-template-columns: repeat(4, $card-width);
        }

        @media (width < 1440px) {
            grid-template-columns: repeat(2, $card-width);
        }

        @media (width < 1080px) {
            grid-template-columns: repeat(1, $card-width);
        }

        &.no-cars {
            grid-template-columns: repeat(1, $card-width) !important;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
        }
    }
}
</style>