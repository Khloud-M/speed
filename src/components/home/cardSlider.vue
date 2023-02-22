<template>
  <section class="card_component">
    <div class="container">
      <Carousel
        :items-to-show="3.5"
        :wrap-around="true"
        transition="500"
        autoplay="4000"

        :breakpoints="breakpoints"
      >
        <Slide v-for="item in data" :key="item.id">
          <div class="carousel__item">
            <card-component :item="item" />
          </div>
        </Slide>

        <template #addons>
          <!-- <Navigation /> -->
        </template>
      </Carousel>
    </div>
  </section>
</template>
  <script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  props: ["id"],
  data() {
    return {
      data: null,
      breakpoints: {
      // 700px and up
      1201: {
        itemsToShow: 3.5,
      },
      481: {
        itemsToShow: 2,
        snapAlign: 'start',

      },
      320: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    },
  }
  },
  methods: {
    getAbout() {
      this.axios({
        method: "GET",
        url: "latest-products",
      })
        .then((res) => {
          this.data = res.data.data;
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getAbout();
  },
});
</script>
