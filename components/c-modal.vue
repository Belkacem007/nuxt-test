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

const closeModal = () => {
    emit('close', props.show)
}

const closeModalOutside = () => {
    if (props.show) {
        closeModal();
    }
}


</script>

<template>
    <div v-if="show" class="overlay__modal" @click="closeModalOutside">
        <div class="modal slide__modal" @click.stop>
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