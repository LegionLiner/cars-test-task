<template>
    <div class="pagination">
        <svg @click="changePage(currentPage - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14 16L10 12L14 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <div class="pagination__pages">
            <div class="pagination__page">
                {{ currentPage }}
            </div>
            of
            <div class="pagination__page" @click="changePage(carsStore.lastPage)">
                {{ carsStore.lastPage }}
            </div>
        </div>
        <svg @click="changePage(currentPage + 1)" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16L14 12L10 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeCars } from '../../stores/carsStore';

const emit = defineEmits(['change']);

const carsStore = storeCars();

const currentPage = ref(1);

function changePage(page: number) {
    if (page < 1 || page > carsStore.lastPage) {
        return;
    }
    currentPage.value = page;
    emit('change', page);
}

watch(() => carsStore.query.page, () => {
    currentPage.value = carsStore.query.page;
})
</script>

<style scoped lang="scss">
.pagination {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
        cursor: pointer;
    }

    &__pages {
        display: flex;
        align-items: center;
        gap: 12px;

        .pagination__page {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(228, 228, 228, 1);
            border-radius: 4px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #293148;
            cursor: pointer;
        }
    }
}
</style>