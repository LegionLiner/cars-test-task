<template>
    <div class="card">
        <img class="card__dots" src="../../assets/dots.svg" alt="more">
        <img :src="car.placeholder" alt="car image">
        <div class="card__info">
            <p class="vehicle_name">{{ car.vehicle_name || 'Mersedes Benz C-Class' }}</p>
            <p>VIN {{ car.vin }}</p>
        </div>
        <div class="card__footer">
            <div class="count">
                <img v-if="car.uploads == 30" src="../../assets/check.svg">
                {{ car.uploads }}/30
            </div>
            <div class="discount">
                3 days left
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    car: Object as any // тут netlify ломается, пришлось эни поставить
});

</script>

<style scoped lang="scss">
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 40px 20px 20px;
    border-radius: 10px;
    background: rgba(243, 246, 248, 1);

    img {
        width: -webkit-fill-available;
        height: 185px;
    }

    .card__info {
        padding: 16px 0;
        margin-bottom: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: rgba(41, 49, 72, 0.6);

        border-bottom: 1px solid rgba(228, 228, 228, 1);


        .vehicle_name {
            font-size: 20px;
            font-weight: 700;
            line-height: 22px;
            color: rgba(41, 49, 72, 1);
        }
    }

    .card__footer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .count {
            padding: 4px 14px;
            background: rgba(237, 237, 237, 1);
            border-radius: 6px;

            font-family: DM Sans;
            font-size: 15px;
            font-weight: 700;
            line-height: 22px;
            text-align: center;

        }

        .discount {
            font-size: 15px;
            font-weight: 500;
            line-height: 16px;
            color: rgba(41, 49, 72, 0.6);
        }
    }

    .card__dots {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}
</style>