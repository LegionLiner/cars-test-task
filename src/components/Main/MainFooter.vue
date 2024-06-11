<template>
    <div class="footer">
        <p>Showing {{ carsStore.cars.length }} out of {{ carsStore.total }}</p>
        <UIPagination @change="carsStore.query.page = $event"></UIPagination>
    </div>
</template>

<script setup lang="ts">
import { storeCars } from '../../stores/carsStore';
import UIPagination from '../UI/UIPagination.vue';

const carsStore = storeCars();
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}
</style>