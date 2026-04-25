<template lang="">
    <div
            class="container-invitation border border-3 border-light mx-auto" id="container-invitation"
          >
            <div class="invitation-card text-center">
              <div class="invitation-topline"></div>
              <div class="invitation-date" :class="{ 'opacity-0': !props.showDate }">03.05.2026</div>

              <div class="invitation-body">
                <p class="invite-to">Trân Trọng Kính Mời:</p>
                <p class="invite-name">{{ name }}</p>
              </div>

              <button
                type="button"
                class="btn btn-light shadow rounded-4 mt-3 mx-auto open-invitation"
                :class="{ 'opacity-0': !props.showBtnInvitation }"
                onclick="undangan.guest.open(this)"
              >
                <i class="fa-solid fa-envelope-open fa-bounce me-2"></i>Mở thiệp
              </button>
            </div>
          </div>
</template>
<script setup>

const props = defineProps({
    showDate: {
        type: Boolean,
        default: true
    },
    showBtnInvitation: {
        type: Boolean,
        default: true
    }
})

const params = new URLSearchParams(window.location.search)

const name = params.get('name') ?? "Bạn và Gia Đình"
</script>
<style lang="">
    
</style>