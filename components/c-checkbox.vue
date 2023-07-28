<template>
    <div class="wrapper">
        <input type="checkbox" :checked="modelValue" @change="handleChange" />
        <label class="label">{{ label }}</label>
        <span v-if="count" class="right__span" style="margin-left: 2px;"> ({{ count }})</span>
    </div>
</template>
  
<script setup>


const props = defineProps({
    label: { type: String, required: true },
    count: {
        type: Number
    },
    modelValue: {
        type: Boolean
    }

});

const emit = defineEmits();

const handleChange = (event) => {
    emit('update:modelValue', event.target.checked);
};


</script>

<style scoped>
label {
    color: #121829;
    font-size: 16px;
    font-weight: 600;
    margin-left: 12px;
}
</style>

