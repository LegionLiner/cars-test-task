<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <p>Demo Test</p>
        </div>
        <div class="sidebar__content">
            <div class="sidebar__element">
                <img src="../assets/user.svg" alt="user">
                <p>Profile</p>
            </div>
            <div class="sidebar__element active">
                <img src="../assets/rim.svg" alt="rim">
                <p>Vehicles</p>
            </div>
            <div class="sidebar__element">
                <img src="../assets/settings.svg" alt="setting">
                <p>Setting</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.sidebar {
    z-index: 1000;
    position: fixed;
    background-color: rgba(40, 40, 40, 1);
    background-image: url(../assets/bg.svg);
    background-position: bottom center;
    background-repeat: no-repeat;
    height: 100dvh;
    width: 256px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 100px;

    .sidebar__header {
        color: white;
        font-size: 24px;
        font-weight: 700;
        margin-left: 40px;
    }

    .sidebar__content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .sidebar__element {
            display: flex;
            align-items: center;
            padding: 12px 24px;
            gap: 20px;
            color: rgba(255, 255, 255, 0.45);
            font-size: 16px;
            font-weight: 500;
            border-left: 2px solid transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &.active {
                color: white;
                background: rgba(255, 255, 255, 0.2);
                border-left: 2px solid rgba(217, 14, 50, 1);
            }

            &:hover {
                color: white;
                background: rgba(255, 255, 255, 0.2);
                border-left: 2px solid rgba(217, 14, 50, 1);
            }
        }
    }
}
</style>