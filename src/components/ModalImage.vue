<template>
<!-- generated section for ModalImage -->
<!-- Modal Image -->
    <div class="modal fade" id="modal-image" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4 border border-0">
          <div class="modal-body p-0">
            <div class="d-flex position-absolute top-0 end-0">
              <a
                class="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                role="button"
                target="_blank"
                href="../../assets/images/placeholder.webp"
                id="button-modal-click"
              >
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  style="width: 1em !important"
                ></i>
              </a>
              <button
                class="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                id="button-modal-download"
              >
                <i
                  class="fa-solid fa-download"
                  style="width: 1em !important"
                ></i>
              </button>
              <button
                class="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                data-bs-dismiss="modal"
              >
                <i
                  class="fa-solid fa-circle-xmark"
                  style="width: 1em !important"
                ></i>
              </button>
            </div>

            <img
              src="../../assets/images/placeholder.webp"
              class="img-fluid w-100 rounded-4 cursor-pointer"
              alt="image"
              id="show-modal-image"
            />
          </div>
        </div>
      </div>
    </div>
</template>
