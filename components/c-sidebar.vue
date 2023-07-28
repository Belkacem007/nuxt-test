<script setup>
import { useEmailsStore } from '@/stores/emails';

const store = useEmailsStore();
const emailsLength = store.getEmailsLength;

</script>

<template>
    <div class="wrapper-sidebar">
        <div class="wrapper-list">
            <img class="logo" src="~/assets/icons/logo.svg" alt="logo">
            <div class="link-list">
                <c-link label="Inbox" icon="inbox" to="/inbox" :count=emailsLength />
                <c-link label="Archive" icon="archive" to="/archive" />
            </div>
        </div>
        <c-link label="Logout" icon="logout" />
    </div>
</template>