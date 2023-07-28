<template>
    <div class="wrapper" style="margin-right: 40px;">
        <img :src="`_nuxt/assets/icons/${icon}.svg`" :alt=icon>
        <span style="margin-left:12px;">{{ title }}</span>
    </div>
</template>

<script setup>


const props = defineProps({
    title: { type: String },
    icon: {
        type: String
    }
})

</script>