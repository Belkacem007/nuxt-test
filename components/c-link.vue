<template>
    <NuxtLink :to=to @click="activeLink" :class="{ 'active': $route.path === to }" class="wrapper-link">
        <img :src="`_nuxt/assets/icons/${icon}.svg`" :alt=icon>
        <span class="link">{{ label }}</span>
        <span v-if="count" class="right__span">{{ count }}</span>
    </NuxtLink>
</template>

<script setup >

// import { ref } from 'vue';

const prpos = defineProps({
    label: { type: String },
    to: {
        type: String,
        default: "#"
    },
    icon: {
        type: String
    },
    count: {
        type: Number
    }
})

const isActiveLink = ref(false)

const activeLink = () => {
    isActiveLink.value = true;
};



</script>

<style lang="scss">
/* Adjust this to your desired background color */
.active {
    color: $primary !important;
    background-color: $bg-rounded;
    border-radius: 54px;
}

.right__span {
    margin-left: auto;
    font-weight: 600;
}
</style>

