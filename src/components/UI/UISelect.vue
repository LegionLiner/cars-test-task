<template>
    <div ref="selectRef" class="select" :class="outlined ? 'outlined' : ''">
        <div class="select__content">
            <slot name="image"></slot>
            <p class="select__text">{{ activeItem }}</p>
            <img src="../../assets/arrow.svg" alt="arrow" :class="show ? 'reverse' : ''">
        </div>
        <div v-if="show" class="select__dropdown">
            <div class="select__item" v-for="item in items" :key="item.value"
                :class="activeItem == item.value ? 'active' : ''" @click="changeActiveItem(item.value)">
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Item {
    title: string,
    value: string | number
}
interface Props {
    outlined: boolean,
    items: Item[],
    active?: string
}

const props = defineProps<Props>();
const emit = defineEmits(['change']);

const selectRef = ref<HTMLElement | null>(null);
const show = ref<boolean>(false);
const activeItem = ref<string | number>(props.active || '');

function changeActiveItem(item: string | number) {
    activeItem.value = item;
    emit('change', item);
}

onMounted(() => {
    selectRef.value?.addEventListener('click', () => {
        show.value = !show.value;
    });

    document.addEventListener('click', (event) => {
        if (!selectRef.value?.contains(event.target as Node)) {
            show.value = false;
        }
    })
})
</script>

<style scoped lang="scss">
.select {
    z-index: 100;
    height: 42px;
    background: white;
    width: 100px;
    cursor: pointer;
    position: relative;
    user-select: none;
    display: flex;
    align-items: center;

    &__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 4px 14px;
        border-radius: 6px;

        img {
            transform: rotate(0deg);
            transition: all 0.2s ease;
        }

        .reverse {
            transform: rotate(180deg);
        }
    }

    .select__dropdown {
        position: absolute;
        left: 0;
        top: 42px;
        width: 100%;
        background: white;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        padding: 4px;
    }

    .select__item {
        padding: 4px 8px;
        margin-bottom: 2px;
        border-radius: 6px;

        &:hover {
            background: rgba(228, 228, 228, 1);
        }

        &.active {
            background: rgba(228, 228, 228, 1);
        }
    }

    &.outlined {
        width: 85px;
        border: 1px solid rgba(228, 228, 228, 1);
        border-radius: 8px;

        .select__dropdown {
            border: 1px solid rgba(228, 228, 228, 1);
            border-radius: 8px;
            padding: 4px;
        }
    }
}
</style>