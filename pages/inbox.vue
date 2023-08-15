<template>
    <div>
        <h1 class="inbox__title">Inbox</h1>
        <div class="top__nav">
            <c-checkbox label="Email Selected" v-model="selectAllEmails" @change="selectAll"
                :count="selectedEmails.length" />

            <div class="wrapper">
                <c-button title="Mark as read (r)" icon="mail" />
                <c-button title="Archive (a)" icon="trash" />
            </div>
        </div>
        <div class="wrapper__emails">
            <div v-for="email in emails" :key="email.id" class="wrapper__email" @click="openModal(email)">
                <input type="checkbox" :id="email.id" v-model="selectedEmails" :value="email" @click.stop>
                <span>{{ email.message }}</span>
            </div>
        </div>

        <c-modal :show="showModal" @close="showModal = false" :email="mail" />

    </div>
</template>


<script setup>

import { useEmailsStore } from '@/stores/emails';

const store = useEmailsStore();
const emails = store.getEmails;




const mail = ref([])
const selectedEmails = ref([])
const selectAllEmails = ref(false);

const showModal = ref(false);





const openModal = (email) => {
    showModal.value = true
    mail.value = email
}



const selectAll = () => {
    if (selectAllEmails.value) {
        selectedEmails.value = [...emails]; // Select all emails
    } else {
        selectedEmails.value = []; // Unselect
    }
};

</script>


<style scoped>
span {
    color: #121829;
    font-size: 16px;
    font-weight: 600;
    margin-left: 12px;
}
</style>




