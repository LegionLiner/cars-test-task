<template>
    <button :class="`button-${type}`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

interface Props {
    type: 'filled' | 'outlined'
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.button-outlined,
.button-filled {
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 10px;
    cursor: pointer;
}

.button-filled {
    background: rgba(217, 14, 50, 1);
    box-shadow: 0px 8px 24px 0px rgba(217, 14, 50, 0.12);
    border: none;
    padding: 9px 18px;
    color: white;

    &:hover {
        background: rgba(217, 14, 50, 0.85);
    }
}

.button-outlined {
    background: white;
    border: 1px solid rgba(232, 110, 132, 1);
    padding: 9px;
    color: rgba(232, 110, 132, 1);

    &:hover {
        border: 1px solid rgba(217, 14, 50, 1);
    }
}
</style>