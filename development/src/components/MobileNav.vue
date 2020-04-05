<template>
    <div class="sidebar">
        <div class="dark" @click="closeMenu" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="mobile-nav">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        methods: {
            closeMenu: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>

<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-100%);
        transition: all 0.2s ease-in 0s
    }

    .dark {
        background-color: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 2;
    }

    .mobile-nav {
        overflow-y: auto;
        background-color: gray;
        position: fixed;
        top: 0;
        left: 50%;
        height: auto;
        min-height: fit-content;
        z-index: 3;
        width: 90%;
        margin-left: -45%;
        padding: 30px 0;
    }
</style>