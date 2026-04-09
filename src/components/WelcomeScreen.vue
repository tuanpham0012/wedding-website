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
            src="../../assets/images/placeholder.webp"
            data-src="../../assets/images/bg.webp"
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

          <div
            class="container-invitation border border-3 border-light mx-auto" id="container-invitation"
          >
            <div class="invitation-card text-center">
              <div class="invitation-topline"></div>
              <div class="invitation-date">11.04.2026</div>

              <div class="invitation-body">
                <p class="invite-to">Trân Trọng Kính Mời:</p>
                <p class="invite-name">Bạn Tuấn và người thương</p>
              </div>

              <button
                type="button"
                class="btn btn-light shadow rounded-4 mt-3 mx-auto open-invitation"
                onclick="undangan.guest.open(this)"
              >
                <i class="fa-solid fa-envelope-open fa-bounce me-2"></i>Open
                Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
