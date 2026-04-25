<template>
  <div class="invitation-app">
    <InvitationRoot />
    <WelcomeScreen />
    <ButtonGroup />
    <LoadingPage />
    <ModalImage />
  </div>
</template>

<script setup>
import InvitationRoot from './components/InvitationRoot.vue';
import WelcomeScreen from './components/WelcomeScreen.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import LoadingPage from './components/LoadingPage.vue';
import ModalImage from './components/ModalImage.vue';
</script>
