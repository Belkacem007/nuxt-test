<script setup>

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },

    email: {
        type: Object
    }
})

const emit = defineEmits();

const toggleModal = computed(() => {
    return props.show ? 'slide__modal' : 'close__modal'
})

const closeModal = () => {
    emit('close', false)
}

const closeModalOutside = () => {
    if (props.show) {
        closeModal();
    }
}

onMounted(() => {
    window.addEventListener('keydown', closeModalOnEsc);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', closeModalOnEsc)
})

const closeModalOnEsc = (event) => {
    if (event.key === 'Escape') {
        closeModal()
    }
}

</script>

<template>
    <div v-if="show" class="overlay__modal" @click="closeModalOutside">
        <div class="modal" :class="toggleModal" @click.stop>
            <div class="top__nav__modal">
                <div @click="closeModal" class="wrapper" style="margin-right: 40px; cursor: pointer;">
                    <img :src="`_nuxt/assets/icons/close.svg`" alt="close">
                    <span style="margin-left:12px;">Close (Esc)</span>
                </div>

                <div class="wrapper">
                    <c-button title="Mark as read (r)" icon="mail" />
                    <c-button title="Archive (a)" icon="trash" />
                </div>
            </div>

            <div class="email__modal">
                <c-title :text="email.message" as="h2" />
                <p class="email__description"> {{ email.description }} </p>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* ... other styles ... */

.close__modal {
    animation: close-in .3s ease-in-out;
}

@keyframes close-in {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
}
</style>

