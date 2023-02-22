<template>
  <section class="card_component" v-if="item">
    <div class="container">
      <div class="row d-flex">
        <div class="card_repeat">
          <div class="image">
            <router-link :to="{
              name:'itemDetails',
              params:{id: item.id},
            }">
              <img :src="item.main_image" alt="image" />
            </router-link>
          </div>
          <!-- image -->
          <div class="content_card">
            <h5>{{ item.name }}</h5>
            <small> {{ item.category.name }}</small>
            <div class="footer_card">
              <div class="price">
                <span> {{ item.product_price }} د.إ</span>
              </div>
              <div>
                <fav-cart />
              </div>
            </div>

            <!-- footer_card-->
          </div>
          <!-- content_card-->
        </div>
      </div>

      <!-- row-->
    </div>
    <!-- contianer-->
  </section>
  <!-- card_component -->
</template>
<script >
export default {
  props: [ "item"],
  data() {
    return {
    };
  },

};
</script>
<style lang="scss">
.card_component {
  margin: 20px 0;
  @media (max-width: 768px) {
    & {
      margin: 40px 0;
    }
  }


  color: var(--main_theme_clr);
  h2 {
    margin: 40px 0;
  }
  .card_repeat {
    width: 300px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px var(--mid_shadow_clr);
    margin-top: 30px;

    h5 {
      font-size: 23px;
      @media (max-width: 768px) {
        & {
          font-size: 17px;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        & {
          font-size: 17px;
        }
      }
    }
    small,
    del {
      color: var(--p_color);
      font-size: 18px;
      @media (max-width: 1024px) {
        & {
          font-size: 14px;
        }
      }
    }
    span {
      font-size: 20px;
      margin-left: 10px;
      @media (max-width: 768px) {
        & {
          font-size: 16px;
        }
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        & {
          font-size: 16px;
        }
      }
    }
    .image {
      height: 340px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      border-radius: 10px;

      //   transition:all 0.5s linear;
      img {
        object-fit: cover;
        object-position: top;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        border-radius: 10px;

        transition: all 0.4s ease;
        &:hover {
          transform: scale(1.04);
        }
      }
    }
    .content_card {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 0px 15px;
      margin-top: 20px;
      line-height: 40px;
      .footer_card {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
}
</style>