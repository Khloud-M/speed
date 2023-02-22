<template>
  <section class="homePage">
    <!-- start carsoul  -->
    <carousel-page />
    <!-- end carsoul  -->
    <about-section />
    <choose-type/>
    <card-slider/>

  </section>
</template>
<script>
import carouselPage from "@/components/home/carouselPage.vue";
import aboutSection from "@/components/home/aboutSection.vue";
import cardSlider from "@/components/home/cardSlider.vue";
import chooseType from "@/components/home/chooseType.vue";

export default {
  components: {
    carouselPage,
    aboutSection,
    cardSlider,
    chooseType
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.homePage {
  color: var(--main_theme_clr);
  overflow: hidden;
}
// start about_us

// start choose_type

.add,
.sales,
.rated {
  flex-direction: column;
  margin: 200px 0;
  @media (max-width: 480px) {
    & {
      margin: 100px 0;
    }
  }
  .routing {
    margin: 50px auto;
    a {
      color: var(--main_theme_clr);
      font-weight: Cairo-Bold;
      font-size: 25px;
      margin-left: 20px;
      @media (max-width: 768px) {
        & {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
