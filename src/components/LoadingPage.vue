<template>
<!-- generated section for LoadingPage -->
<!-- Loading Page -->
    <div class="loading-page bg-white-black" id="loading" style="opacity: 1">
      <div
        class="d-flex justify-content-center align-items-center vh-100 overflow-y-auto"
      >
        <div class="d-flex flex-column width-loading text-center">
          <img
            src="/assets/images/placeholder.webp"
            data-src="/assets/images/icon-192x192.png"
            fetchpriority="high"
            class="img-fluid mb-3 mx-auto object-fit-cover opacity-0"
            alt="icon"
            style="width: 3.5rem; height: 3.5rem"
          />
          <div
            class="progress"
            role="progressbar"
            style="height: 0.5rem"
            aria-label="progress bar"
          >
            <div class="progress-bar" id="progress-bar" style="width: 0%"></div>
          </div>
          <small
            class="d-none mt-1 text-theme-auto"
            id="progress-info"
            style="font-size: 0.8rem"
            >Booting application...</small
          >
          <noscript>
            <small class="mt-1 text-danger"
              >Sorry, this invitation requires javascript to work</small
            >
          </noscript>
        </div>
      </div>
      <div class="text-center position-fixed w-100" style="bottom: 8%; left: 0">
        <div class="d-flex flex-column">
          <small class="text-secondary">from</small>
          <small class="text-theme-auto"
            >Quốc Tuấn</small
          >
          <small class="text-theme-auto"
            >Vui lòng chờ giây lát</small
          >
        </div>
      </div>
    </div>
</template>
