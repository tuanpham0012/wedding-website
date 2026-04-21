<template>
  <!-- generated section for InvitationRoot -->
  <!-- Root Invitation -->
  <div class="row m-0 p-0 opacity-0" id="root">
    <!-- Desktop mode -->
    <DesktopScreen />

    <!-- Smartphone mode -->
    <div class="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
      <!-- Main Content -->
      <main
        data-bs-spy="scroll"
        data-bs-target="#navbar-menu"
        data-bs-root-margin="25% 0% 0% 0%"
        data-bs-smooth-scroll="true"
        tabindex="0"
      >
        <!-- Home -->
        <section
          id="home"
          class="bg-light-dark position-relative overflow-hidden p-0 m-0"
        >
          <img
            src="/assets/images/bg.webp"
            alt="bg"
            class="position-absolute opacity-25 top-50 start-50 translate-middle bg-cover-home"
          />

          <div
            class="position-relative text-center bg-overlay-auto"
            style="background-color: unset"
          >
            <h1
              class="font-esthetic pt-5 pb-4 fw-medium"
              style="font-size: 2.25rem"
            >
              Save The Date
            </h1>

            <img
              src="/assets/images/hoai-tuan/BTT_1952.webp"
              alt="bg"
              onclick="undangan.guest.modal(this)"
              class="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
            />

            <h2 class="font-esthetic my-4" style="font-size: 2.25rem">
              Quốc Tuấn&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;Thu Hoài
            </h2>
            <p class="my-2" style="font-size: 1.25rem">
              Chủ Nhật, 03 Thắng 05 năm 2026
            </p>

            <InvitationCard
              class="mt-5 mb-5"
              :show-date="false"
              :show-btn-invitation="false"
            />
            <button
              class="btn btn-outline-auto btn-sm shadow rounded-pill px-3 py-1"
              style="font-size: 0.825rem"
            >
              <i class="fa-solid fa-calendar-check me-2"></i>Lưu vào Google
              Calendar
            </button>

            <div
              class="d-flex justify-content-center align-items-center mt-4 mb-2"
            >
              <div
                class="mouse-animation border border-secondary border-2 rounded-5 px-2 py-1 opacity-50"
              >
                <div class="scroll-animation rounded-4 bg-secondary"></div>
              </div>
            </div>

            <p class="pb-4 m-0 text-secondary" style="font-size: 0.825rem">
              Cuộn xuống để xem thêm thông tin về đám cưới của chúng tôi
            </p>
          </div>
        </section>

        <!-- Wave Separator -->
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-svg no-gap-bottom"
          >
            <path
              fill="currentColor"
              fill-opacity="1"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <!-- Bride -->
        <section class="bg-white-black text-center" id="bride">
          <p class="pb-4 px-2 m-0" style="font-size: 1rem">
            TRÂN TRỌNG BÁO TIN LỄ THÀNH HÔN CỦA:
          </p>
          <h2 class="font-esthetic my-4" style="font-size: 1.875rem">
            Quốc Tuấn&nbsp;&nbsp; &amp; &nbsp;&nbsp;Thu Hoài
          </h2>

          <div class="overflow-x-hidden pb-4">
            <div class="position-relative">
              <!-- Love animation -->
              <div class="position-absolute" style="top: 0%; right: 5%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="opacity-50"
                  data-time="500"
                  data-class="animate-love"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </div>

              <div data-aos="fade-right" data-aos-duration="2000" class="pb-1">
                <img
                  src="/assets/images/hoai-tuan/BTT_2213.webp"
                  alt="cowo"
                  onclick="undangan.guest.modal(this)"
                  class="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                />
                <h2 class="font-esthetic m-0" style="font-size: 2.125rem">
                  Nhà trai
                </h2>
                <!-- <p class="mt-3 mb-1" style="font-size: 1.25rem">Putra ke-1</p> -->
                <p class="mb-0" style="font-size: 0.95rem">Bố: Phạm Văn Thậm</p>
                <p class="mb-0" style="font-size: 0.95rem">
                  Mẹ: Nguyễn Thị Bíp
                </p>
              </div>

              <!-- Love animation -->
              <div class="position-absolute" style="top: 90%; left: 5%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="opacity-50"
                  data-time="2000"
                  data-class="animate-love"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </div>
            </div>

            <h2 class="font-esthetic mt-4" style="font-size: 4.5rem">&amp;</h2>

            <div class="position-relative">
              <!-- Love animation -->
              <div class="position-absolute" style="top: 0%; right: 5%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="opacity-50"
                  data-time="3000"
                  data-class="animate-love"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" class="pb-1">
                <img
                  src="/assets/images/hoai-tuan/BTT_2209.webp"
                  alt="cewe"
                  onclick="undangan.guest.modal(this)"
                  class="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
                />
                <h2 class="font-esthetic m-0" style="font-size: 2.125rem">
                  Nhà gái
                </h2>
                <!-- <p class="mt-3 mb-1" style="font-size: 1.25rem">Putri ke-2</p> -->
                <p class="mb-0" style="font-size: 0.95rem">
                  Bố: Nguyễn Đình Công
                </p>
                <p class="mb-0" style="font-size: 0.95rem">Mẹ: Đoàn Thị Hiệp</p>
              </div>

              <!-- Love animation -->
              <div class="position-absolute" style="top: 90%; left: 5%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="opacity-50"
                  data-time="2500"
                  data-class="animate-love"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <!-- Wave Separator -->
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-svg no-gap-bottom"
          >
            <path
              fill="currentColor"
              fill-opacity="1"
              d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>

        <!-- Firman Allah Subhanahu Wa Ta'ala -->
        <!--      -->

        <!-- Love Story -->
        <section class="bg-light-dark pt-2 pb-4">
          <div class="container">
            <div class="bg-theme-auto rounded-5 shadow p-3">
              <h2
                class="font-esthetic text-center py-2 mb-2"
                style="font-size: 2.125rem"
              >
                Câu chuyện tình yêu
              </h2>

              <div
                id="video-love-stroy"
                class="position-relative rounded-4 mb-2 pb-0"
                data-src="./assets/video/hoai-tuan.mp4"
                data-vid-class="w-100 rounded-4 shadow-sm m-0 p-0"
              >
                <div
                  class="position-absolute d-flex flex-column justify-content-center align-items-center top-50 start-50 translate-middle w-100 h-100 bg-overlay-auto rounded-4 z-3"
                  id="video-love-stroy-loading"
                >
                  <div
                    class="progress w-25"
                    role="progressbar"
                    style="height: 0.5rem"
                    aria-label="progress bar"
                  >
                    <div
                      class="progress-bar"
                      id="progress-bar-video-love-stroy"
                      style="width: 0%"
                    ></div>
                  </div>
                  <small
                    class="mt-1 text-theme-auto bg-theme-auto py-0 px-2 rounded-4"
                    id="progress-info-video-love-stroy"
                    style="font-size: 0.7rem"
                  ></small>
                </div>
              </div>

              <div class="position-relative">
                <div
                  class="position-absolute d-flex justify-content-center align-items-center top-50 start-50 translate-middle w-100 h-100 bg-overlay-auto z-3"
                  style="opacity: 100%; background-color: unset"
                >
                  <button
                    class="btn btn-outline-auto btn-sm rounded-4 shadow-sm"
                    onclick="undangan.guest.showStory(this.parentNode)"
                  >
                    <i class="fa-solid fa-heart fa-bounce me-2"></i>Xem câu
                    chuyện
                  </button>
                </div>

                <div
                  class="overflow-y-scroll overflow-x-hidden p-2 with-scrollbar"
                  style="height: 15rem"
                >
                  <div class="row">
                    <div class="col-auto position-relative">
                      <p
                        class="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                        style="width: 2rem; height: 2rem"
                      >
                        1
                      </p>
                      <hr
                        class="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none"
                      />
                    </div>
                    <div class="col mt-1 mb-3 ps-0">
                      <p class="fw-bold mb-2">
                        💼 Sự khởi đầu của một chuyện tình
                      </p>
                      <div class="small mb-0">
                        <p>
                          Họ gặp nhau vào năm nhất đại học, trong một lớp học
                          đông đúc và ồn ào. Tuấn là chàng trai ít nói, luôn
                          ngồi ở góc cuối lớp, còn Hoài thì hoạt bát, hay cười và
                          lúc nào cũng có bạn bè xung quanh. Hai con người tưởng
                          như chẳng có điểm chung ấy lại vô tình trở thành bạn
                          khi cùng làm chung một bài thuyết trình.
                        </p>

                        <p>
                          Ban đầu chỉ là những buổi gặp gỡ để làm bài, rồi dần
                          dần là những lần đi ăn sau giờ học, những tin nhắn hỏi
                          han vu vơ mỗi tối. Tuấn quen với việc có Hoài bên cạnh,
                          còn Hoài thì nhận ra cô luôn cảm thấy dễ chịu khi ở
                          cạnh Tuấn. Nhưng suốt những năm đại học, họ chỉ dừng
                          lại ở tình bạn – một tình bạn đủ sâu để không ai dám
                          bước qua ranh giới.
                        </p>

                        <p>
                          Ngày tốt nghiệp, giữa dòng người chụp ảnh và chia tay,
                          Hoài bất ngờ hỏi:
                        </p>
                        <p class="quote">
                          “Sau này nếu tụi mình vẫn còn bên nhau, cậu có nghĩ
                          đến chuyện yêu tớ không?”
                        </p>

                        <p>Tuấn không trả lời ngay, chỉ cười và nói:</p>
                        <p class="quote">“Để sau này xem.”</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-auto position-relative">
                      <p
                        class="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1"
                        style="width: 2rem; height: 2rem"
                      >
                        2
                      </p>
                      <hr
                        class="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none"
                      />
                    </div>
                    <div class="col mt-1 mb-3 ps-0">
                      <p class="fw-bold mb-2">
                        💞 Những hạt giống tình yêu trong thử thách
                      </p>
                      <div class="small mb-0">
                        <p>
                          Ra trường, mỗi người một công việc, cuộc sống bận rộn
                          hơn, nhưng họ vẫn giữ thói quen nói chuyện mỗi ngày.
                          Những buổi cà phê cuối tuần, những lần cùng nhau vượt
                          qua áp lực công việc… khiến khoảng cách “bạn bè” dần
                          trở nên mỏng manh.
                        </p>

                        <p>
                          Một tối mưa, Tuấn đến đón Hoài tan làm. Không hiểu vì
                          sao, cả hai im lặng rất lâu. Rồi Tuấn khẽ nói:
                        </p>
                        <p class="quote">
                          “Có lẽ tớ đã ‘xem’ đủ lâu rồi. Tớ không muốn cậu là
                          bạn nữa.”
                        </p>

                        <p>Hoài bật cười, đôi mắt ươn ướt:</p>
                        <p class="quote">“Tớ cũng vậy.”</p>

                        <p>
                          Tình yêu của họ bắt đầu muộn hơn người khác, nhưng lại
                          chín chắn và bình yên. Không còn những bối rối tuổi
                          trẻ, họ hiểu nhau đủ để biết cách ở bên nhau lâu dài.
                        </p>

                        <p>
                          Vài năm sau, trong một đám cưới nhỏ ấm cúng, Tuấn nắm
                          tay Hoài bước vào lễ đường. Những người bạn đại học năm
                          nào nhìn họ, ai cũng mỉm cười – vì cuối cùng, câu
                          chuyện còn dang dở thời sinh viên đã có một cái kết
                          trọn vẹn.
                        </p>

                        <p>Và Tuấn thì thầm với Hoài:</p>
                        <p class="quote">
                          “May mà ngày đó tớ không trả lời ngay… để hôm nay có
                          thể chắc chắn rằng, cậu chính là lựa chọn đúng nhất
                          của cuộc đời tớ.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Wave Separator -->
        <div class="svg-wrapper">
          <WeddingCeremonyCard />
        </div>

        <!-- Wedding Date -->
        <section class="bg-white-black pb-2 pt-3" id="wedding-date">
          <div class="container text-center">
            <h2 class="font-esthetic py-4 m-0" style="font-size: 2.25rem">
              Khoảnh khắc hạnh phúc
            </h2>

            <div class="border rounded-pill shadow py-2 px-4 mt-2 mb-4">
              <div class="row justify-content-center">
                <div class="col-3 p-1">
                  <p
                    class="d-inline m-0 p-0"
                    style="font-size: 1.25rem"
                    id="day"
                  >
                    0
                  </p>
                  <small class="ms-1 me-0 my-0 p-0 d-inline">Ngày</small>
                </div>
                <div class="col-3 p-1">
                  <p
                    class="d-inline m-0 p-0"
                    style="font-size: 1.25rem"
                    id="hour"
                  >
                    0
                  </p>
                  <small class="ms-1 me-0 my-0 p-0 d-inline">Giờ</small>
                </div>
                <div class="col-3 p-1">
                  <p
                    class="d-inline m-0 p-0"
                    style="font-size: 1.25rem"
                    id="minute"
                  >
                    0
                  </p>
                  <small class="ms-1 me-0 my-0 p-0 d-inline">Phút</small>
                </div>
                <div class="col-3 p-1">
                  <p
                    class="d-inline m-0 p-0"
                    style="font-size: 1.25rem"
                    id="second"
                  >
                    0
                  </p>
                  <small class="ms-1 me-0 my-0 p-0 d-inline">Giây</small>
                </div>
              </div>
            </div>

            <p class="py-2 m-0" style="font-size: 0.95rem">
              Chúng tôi sẽ tổ chức các sự kiện sau đây vào ngày trọng đại của
              mình:
            </p>

            <!-- Love animation -->
            <div class="position-relative">
              <div class="position-absolute" style="top: 0%; right: 5%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="opacity-50"
                  data-time="3000"
                  data-class="animate-love"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                  />
                </svg>
              </div>
            </div>

            <div class="overflow-hidden">
              <div class="py-1" data-aos="fade-down" data-aos-duration="1500">
                <h2 class="font-esthetic m-0 py-2" style="font-size: 2rem">
                  08:30
                </h2>
                <p style="font-size: 0.95rem">- Đón Khách Và Chụp Ảnh</p>
              </div>
              <div>|</div>
              <div class="py-1" data-aos="fade-left" data-aos-duration="1500">
                <h2 class="font-esthetic m-0 py-2" style="font-size: 2rem">
                  09:00
                </h2>
                <p style="font-size: 0.95rem">- Khai Tiệc Và Giao Lưu</p>
              </div>
              <div>|</div>
              <div class="py-1" data-aos="fade-right" data-aos-duration="1500">
                <h2 class="font-esthetic m-0 py-2" style="font-size: 2rem">
                  10:30
                </h2>
                <p style="font-size: 0.95rem">-Lễ Thành Hôn</p>
              </div>
              <div>|</div>
              <div class="py-1" data-aos="fade-up" data-aos-duration="1500">
                <h2 class="font-esthetic m-0 py-2" style="font-size: 2rem">
                  11:30
                </h2>
                <p style="font-size: 0.95rem">- Tung Hoa</p>
              </div>
            </div>

            <!-- <p class="py-2 m-0" style="font-size: 0.95rem">
                Demi kehangatan bersama, kami memohon kesediaan Anda untuk
                mengenakan dress code berikut:
              </p>

              <div class="position-relative">
                <div class="position-absolute" style="top: 0%; left: 5%">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="opacity-50"
                    data-time="2000"
                    data-class="animate-love"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                    />
                  </svg>
                </div>
              </div> -->

            <!-- <div class="py-2" data-aos="fade-down" data-aos-duration="1500">
                <div
                  class="d-flex justify-content-center align-items-center mb-3"
                >
                  <div
                    class="shadow rounded-circle border border-secondary"
                    style="width: 3rem; height: 3rem; background-color: white"
                  ></div>
                  <div
                    class="shadow rounded-circle border border-secondary"
                    style="
                      width: 3rem;
                      height: 3rem;
                      background-color: aquamarine;
                      margin-left: -1rem;
                    "
                  ></div>
                  <div
                    class="shadow rounded-circle border border-secondary"
                    style="
                      width: 3rem;
                      height: 3rem;
                      background-color: limegreen;
                      margin-left: -1rem;
                    "
                  ></div>
                </div>
                <p style="font-size: 0.95rem">Busana batik dan bersepatu.</p>
              </div> -->
          </div>
        </section>

        <!-- Gallery -->
        <section class="bg-white-black pb-5 pt-3" id="gallery">
          <div class="container">
            <div class="border rounded-5 shadow p-3">
              <h2
                class="font-esthetic text-center py-2 m-0"
                style="font-size: 2.25rem"
              >
                Album Wedding
              </h2>
              <AlbumPicture />
            </div>
          </div>
        </section>

        <!-- Wave Separator -->
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-svg no-gap-bottom"
          >
            <path
              fill="currentColor"
              fill-opacity="1"
              d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
        </div>

        <!-- Love Gift -->
        <section class="bg-light-dark pb-3">
          <div class="container text-center">
            <h2 class="font-esthetic pt-3 mb-4" style="font-size: 2.25rem">
              Nhắn gửi yêu thương
            </h2>
            <p class="mb-1" style="font-size: 0.95rem">
              Với tất cả sự tôn trọng, những ai muốn gửi tặng chúng tôi một món
              quà thể hiện tình cảm có thể làm điều đó qua::
            </p>

            <div
              class="bg-theme-auto rounded-4 shadow p-3 mx-4 mt-4 text-start"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <i class="fa-solid fa-money-bill-transfer"></i>
              <p class="d-inline">Chuyển khoản</p>

              <div
                class="d-flex justify-content-between align-items-center mt-2"
              >
                <p class="m-0 p-0" style="font-size: 0.95rem">
                  <i class="fa-regular fa-user fa-sm me-1"></i>Phạm Quốc Tuấn
                </p>
                <button
                  class="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
                  style="font-size: 0.75rem"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTf"
                >
                  <i class="fa-solid fa-circle-info fa-sm me-1"></i>Info
                </button>
              </div>

              <div class="collapse" id="collapseTf">
                <hr class="my-2 py-1" />
                <p class="m-0" style="font-size: 0.9rem">
                  <i class="fa-solid fa-building-columns me-1"></i>MB Bank
                </p>
                <div
                  class="d-flex justify-content-between align-items-center mt-2"
                >
                  <p class="m-0 p-0" style="font-size: 0.85rem">
                    <i class="fa-solid fa-credit-card me-1"></i>0983776901
                  </p>
                  <!-- Ubah juga data-copy sesuai dengan no rekening -->
                  <button
                    class="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
                    style="font-size: 0.75rem"
                    data-copy="1234567891234"
                    onclick="undangan.util.copy(this)"
                  >
                    <i class="fa-solid fa-copy"></i>
                  </button>
                </div>
                <hr class="my-2 py-1" />
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    src="/assets/images/bank-qr.jpg"
                    alt="donate"
                    class="img-fluid rounded-3 mx-auto bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Comment -->
        <section class="bg-light-dark my-0 pb-0 pt-3" id="comment">
          <div class="container">
            <div class="border rounded-5 shadow p-3 mb-2">
              <h2
                class="font-esthetic text-center mt-2 mb-4"
                style="font-size: 2.25rem"
              >
                Ucapan &amp; Doa
              </h2>

              <div class="mb-3">
                <label for="form-name" class="form-label my-1"
                  ><i class="fa-solid fa-person me-2"></i>Nama</label
                >
                <input
                  dir="auto"
                  type="text"
                  class="form-control shadow-sm rounded-4"
                  id="form-name"
                  minlength="2"
                  maxlength="50"
                  placeholder="Isikan Nama Anda"
                  autocomplete="name"
                  data-offline-disabled="false"
                />
              </div>

              <div class="mb-3">
                <label for="form-presence" class="form-label my-1"
                  ><i class="fa-solid fa-person-circle-question me-2"></i
                  >Presensi</label
                >
                <select
                  class="form-select shadow-sm rounded-4"
                  id="form-presence"
                  autocomplete="off"
                  data-offline-disabled="false"
                >
                  <option value="0" selected>Konfirmasi Presensi</option>
                  <option value="1">&#9989; Datang</option>
                  <option value="2">&#10060; Berhalangan</option>
                </select>
              </div>

              <div class="d-block mb-3" id="comment-form-default">
                <div
                  id="information"
                  class="alert alert-info alert-dismissible fade show rounded-4"
                  role="alert"
                >
                  <button
                    type="button"
                    class="btn-close rounded-4 p-3"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onclick="undangan.guest.closeInformation()"
                  ></button>

                  <p style="font-size: 1.5rem">Bestieee!!!</p>
                  <p class="m-0">
                    Cobain like seperti Instagram, dengan tap tap bagian
                    komentarnya
                  </p>
                  <hr class="my-2" />
                  <p class="m-0">
                    Sama bisa format text seperti Whatsapp lohh... cobainn
                    jugaaa, makaciwww bestieee
                  </p>
                </div>

                <label for="form-comment" class="form-label my-1"
                  ><i class="fa-solid fa-comment me-2"></i>Ucapan &amp;
                  Doa</label
                >
                <div class="position-relative">
                  <button
                    class="btn btn-secondary btn-sm rounded-4 shadow-sm me-1 my-1 position-absolute bottom-0 end-0"
                    onclick="
                      undangan.comment.gif.open(undangan.comment.gif.default)
                    "
                    aria-label="button gif"
                    data-offline-disabled="false"
                  >
                    <i class="fa-solid fa-photo-film"></i>
                  </button>
                  <textarea
                    dir="auto"
                    class="form-control shadow-sm rounded-4"
                    id="form-comment"
                    rows="4"
                    minlength="1"
                    maxlength="1000"
                    placeholder="Tulis Ucapan dan Doa"
                    autocomplete="off"
                    data-offline-disabled="false"
                  ></textarea>
                </div>
              </div>

              <div class="d-none mb-3" id="gif-form-default"></div>

              <div class="d-grid">
                <button
                  class="btn btn-primary btn-sm rounded-4 shadow m-1"
                  onclick="undangan.comment.send(this)"
                  data-offline-disabled="false"
                >
                  <i class="fa-solid fa-paper-plane me-2"></i>Send
                </button>
              </div>
            </div>

            <!-- Comments -->
            <div class="py-3" id="comments" data-loading="false"></div>

            <!-- Pagination -->
            <nav
              class="d-flex d-none justify-content-center mt-1 mb-0"
              id="pagination"
            ></nav>
          </div>
        </section>

        <!-- Wave Separator -->
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-svg no-gap-bottom"
          >
            <path
              fill="currentColor"
              fill-opacity="1"
              d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,234.7C480,224,549,224,617,213.3C685.7,203,754,181,823,197.3C891.4,213,960,267,1029,266.7C1097.1,267,1166,213,1234,192C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>

        <!-- End Of Invitation -->
        <section class="bg-white-black py-2 no-gap-bottom">
          <div class="container text-center">
            <p class="pb-2 pt-4 pb-3" style="font-size: 0.95rem">
              Cảm ơn sự quan tâm và những lời chúc phúc của các bạn, sự tham gia
              của bạn là niềm vui và vinh dự lớn lao đối với gia đình chúng tôi.
            </p>

            <hr class="my-3" />

            <div
              class="row align-items-center justify-content-between flex-column pb-3 pt-3"
            >
              <div class="col-auto">
                <small>T<i class="fa-solid fa-heart mx-1"></i>H</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Navbar Bottom -->
      <nav
        class="navbar navbar-expand sticky-bottom rounded-top-4 border-top p-0"
        id="navbar-menu"
      >
        <ul class="navbar-nav nav-justified w-100 align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              <i class="fa-solid fa-house"></i>
              <span class="d-block" style="font-size: 0.7rem">Trang chủ</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#bride">
              <i class="fa-solid fa-user-group"></i>
              <span class="d-block" style="font-size: 0.7rem">Gia đình</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#wedding-date">
              <i class="fa-solid fa-calendar-check"></i>
              <span class="d-block" style="font-size: 0.7rem">Ngày cưới</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">
              <i class="fa-solid fa-images"></i>
              <span class="d-block" style="font-size: 0.7rem">Ảnh cưới</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#comment">
              <i class="fa-solid fa-comments"></i>
              <span class="d-block" style="font-size: 0.7rem">Ucapan</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import AlbumPicture from "./AlbumPicture.vue";
import DesktopScreen from "./DesktopScreen.vue";
import InvitationCard from "./InvitationCard.vue";
import WeddingCeremonyCard from "./WeddingCeremonyCard.vue";
</script>
