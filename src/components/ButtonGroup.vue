<template>
<!-- generated section for ButtonGroup -->
<!-- Button Group -->
    <div
      class="d-flex position-fixed flex-column"
      style="bottom: 10vh; right: 2vh; z-index: 1030"
    >
      <!-- Theme Button -->
      <button
        type="button"
        id="button-theme"
        class="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change theme"
        onclick="undangan.theme.change()"
      >
        <i class="fa-solid fa-circle-half-stroke"></i>
      </button>

      <!-- Audio Button -->
      <button
        type="button"
        id="button-music"
        class="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change audio"
        data-offline-disabled="false"
      >
        <i class="fa-solid fa-circle-pause spin-button"></i>
      </button>
    </div>
</template>
