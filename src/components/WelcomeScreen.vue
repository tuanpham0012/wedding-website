<script setup lang="ts">
import InvitationCard from './InvitationCard.vue';

</script>

<template>
<!-- generated section for WelcomeScreen -->
<!-- Welcome Page -->
    <div class="loading-page bg-white-black" id="welcome" style="opacity: 0">
      <div
        class="d-flex justify-content-center align-items-center vh-100 overflow-y-auto"
      >
        <div class="d-flex flex-column text-center">
          <h2 class="font-esthetic mb-4" style="font-size: 2.25rem">
            The Wedding Of
          </h2>

          <img
            src="/assets/images/hoai-tuan/BTT_2375.webp"
            alt="background"
            class="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto"
          />

          <h2 class="font-esthetic mb-4" style="font-size: 2.25rem">
            Quốc Tuấn &amp; Thu Hoài
          </h2>
          <div
            id="guest-name"
            data-message="Kepada Yth Bapak/Ibu/Saudara/i"
          ></div>

          <InvitationCard />
        </div>
      </div>
    </div>
</template>
