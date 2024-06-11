<template>
    <div class="main">
        <MainHeader></MainHeader>
        <MainView></MainView>
        <MainFooter></MainFooter>
    </div>
</template>

<script setup lang="ts">
import MainFooter from './MainFooter.vue';
import MainHeader from './MainHeader.vue';
import MainView from './MainView.vue';
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    margin-left: 256px;
}
</style>