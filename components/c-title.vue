<template>
    <component :is="as" class="text">
        {{ text }}
    </component>
</template>
  
<script setup>

const props = defineProps({
    text: { type: String },
    // className: { type: String },
    as: {
        type: String,
        default: 'h1'
    }
})


</script>

<style>
text {
    font-size: 20px !important;
    margin-bottom: 32px;
}
</style>
