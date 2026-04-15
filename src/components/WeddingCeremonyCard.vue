<template>
  <div class="ceremony-card-wrapper bg-white-black">
    <article class="ceremony-card text-center border border-1 border-secondary-subtle px-2 py-5">
      <div class="ceremony-divider"></div>

      <p class="ceremony-kicker pb-3">TRÂN TRỌNG KÍNH MỜI</p>

      <div class="ceremony-body">
        <h3 class="ceremony-title">TIỆC MỪNG LỄ THÀNH HÔN</h3>
        <div class="ceremony-divider ceremony-divider-sm"></div>

        <p class="ceremony-time pb-3">VÀO LÚC 10:30 - THỨ 7</p>
        <p class="ceremony-date">11 | 04 | 2026</p>
        <p class="ceremony-lunar pb-3">(Tức Ngày 24 Tháng 02 Năm Bính Ngọ)</p>

        <p class="ceremony-label">TẠI</p>
        <p class="ceremony-venue">TRUNG TÂM TIỆC CƯỚI CUNG XUÂN</p>
        <p class="ceremony-address">01 Võ Thị Sáu, Bạch Mai, Hai Bà Trưng, Hà Nội</p>
        <div class="pt-2" data-aos="fade-down" data-aos-duration="1500">
                <a
                  href="https://goo.gl/maps/ALZR6FJZU3kxVwN86"
                  target="_blank"
                  class="btn btn-outline-auto btn-sm rounded-pill shadow px-3"
                  ><i class="fa-solid fa-map-location-dot me-2"></i>Xem Google
                  Maps</a
                >
              </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.ceremony-card-wrapper {
  padding: 0.5rem 0 1rem;
}

.ceremony-card {
  width: min(100%, 22rem);
  margin: 0 auto;
  padding: 1.2rem 1rem 1.35rem;
  color: #161616;
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 10px 26px rgba(25, 25, 25, 0.06);
  position: relative;
  overflow: hidden;
}

.ceremony-body,
.ceremony-kicker,
.ceremony-divider {
  position: relative;
  z-index: 1;
}

.ceremony-divider {
  width: 60%;
  max-width: 14rem;
  height: 1px;
  margin: 0 auto 1rem;
  background: #6f7680;
}

.ceremony-divider-sm {
  width: 28%;
  max-width: 7rem;
  margin: 0.6rem auto 0.75rem;
}

.ceremony-kicker {
  margin: 0 0 1.15rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.25rem, 3.8vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.06em;
}

.ceremony-title {
  margin: 0;
  font-family: inherit;
  font-size: clamp(1rem, 3vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.03em;
}

.ceremony-time,
.ceremony-date,
.ceremony-lunar,
.ceremony-label,
.ceremony-venue,
.ceremony-address {
  margin: 0;
  position: relative;
  z-index: 1;
}

.ceremony-time {
  font-size: clamp(0.92rem, 2.4vw, 1.05rem);
  letter-spacing: 0.03em;
}

.ceremony-date {
  margin-top: 0.5rem;
  font-size: clamp(1.45rem, 4vw, 1.85rem);
  letter-spacing: 0.06em;
}

.ceremony-lunar {
  margin-top: 0.65rem;
  color: #8a867f;
  font-size: clamp(0.84rem, 2.2vw, 0.98rem);
  font-style: italic;
}

.ceremony-label {
  margin-top: 0.7rem;
  font-size: clamp(0.92rem, 2.5vw, 1.1rem);
  letter-spacing: 0.06em;
}

.ceremony-venue {
  margin-top: 0.25rem;
  font-size: clamp(0.9rem, 2.6vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.ceremony-address {
  margin-top: 0.35rem;
  font-size: clamp(0.8rem, 2.3vw, 0.9rem);
  line-height: 1.55;
}

@media screen and (max-width: 576px) {
  .ceremony-card {
    padding: 1rem 0.9rem 1.15rem;
  }

  .ceremony-kicker {
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }
}
</style>
