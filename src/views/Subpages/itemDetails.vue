<template>
  <section class="Product_details">
    <div class="first">
      <div class="container">
        <div class="row d-flex the_detials">
          <div class="share col-lg-1">
            <div></div>
            <div class="footer_share">
              <div class="share_Icon">
                <div class="social_icon" v-if="showSocial">
                  <div class="facebook">
                    <ShareNetwork
                      network="facebook"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <img src="@/assets/image/facebook.svg" />
                    </ShareNetwork>
                  </div>
                  <div class="twitter">
                    <ShareNetwork
                      network="twitter"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                      <img src="@/assets/image/twitter.svg" />
                    </ShareNetwork>
                  </div>
                </div>
                <button @click="Social">
                  <img src="@/assets/image/share.png" alt="share" />
                </button>
              </div>
              <!-- share  -->
              <div>
                <fav-cart />
              </div>
              <!-- cart fav  -->
            </div>
          </div>
          <!-- share -->
          <div class="carsoul-img col-lg-4">
            <img :src="productDetails.productImage" />
          </div>
          <!-- casoul img-->
          <div class="data_product col-lg-6">
            <div class="content_product">
              <div class="name_item">
                {{ productDetails.productName }}
              </div>
              <div class="categery">
                <span> {{ productDetails.productCat }} </span>
              </div>
              <div class="rate">
                {{ productDetails.productRate }}
              </div>
              <div class="more_details">
                <div class="col-lg-6">
                  <span> حالة المنتج : </span>
                  {{ productDetails.productStatus }}
                </div>
                <div class="col-lg-6">
                  <span> الكمية المتاحة: </span>
                  {{ productDetails.productQty }}
                </div>
                <div class="col-lg-6">
                  <span>الدولة: </span>
                  {{ productDetails.productCountry }}
                </div>
                <div class="col-lg-6">
                  <span> المد ينة: </span>
                  {{ productDetails.productCity }}
                </div>
                <div class="col-lg-6">
                  <span> طريقة الشحن: </span>
                  {{ productDetails.Shippingway }}
                </div>
              </div>
            </div>
            <!-- footer data_product -->
          </div>
          <!-- data -->
        </div>
      </div>
    </div>
    <section class="more_details_up">
      <div class="container">
        <div class="similar my-5">
          <h2>منتجات متشابهة</h2>
          <Carousel
            :items-to-show="4"
            :wrap-around="true"
            transition="500"
            autoplay="4000"
            :breakpoints="breakpoints"
          >
            <Slide v-for="simi in productDetails.productSimilar" :key="simi.id">
              <div class="carousel__item">
                <div class="image">
                  <img :src="simi.main_image" width="200" height="200" />
                </div>
                <div class="name">
                  {{ simi.name }}
                </div>
                <div class="categery">
                  {{ simi.category.name }}
                </div>
                <div class="price">
                  {{ simi.product_price }}
                </div>
              </div>
            </Slide>

            <template #addons>
              <!-- <Navigation /> -->
            </template>
          </Carousel>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
export default defineComponent({
  // name: 'Gallery',
  components: {
    Carousel,
    Slide,
    // Navigation,
  },
  props: ["id", "item"],
  data() {
    return {
      productDetails: {
        productName: null,
        productImage: null,
        productCat: null,
        productRate: null,
        productQty: null,
        productCity: null,
        productCountry: null,
        Shippingway: null,
        productStatus: null,
        productSimilar: null,
      },
      breakpoints:{
        1200:{
          itemsToShow: 4,
        snapAlign: 'start',
        }
      },

      tab: null,
      qty: 1,
      currentSlide: 0,
      showSocial: false,
      collectImg: [
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
        require("@/assets/image/pic1.png"),
      ],

      commentsPeople: [
        {
          id: 2,
          img: require("@/assets/image/hassnaa.jpg"),
          name: " حسناء سلحفة",
          rate: 3,
          comment: "هذا المنتج غاية ف الروعة ",
        },
        {
          id: 3,
          img: require("@/assets/image/khloud.jpg"),
          name: " خلود محمد",
          rate: 5,
          comment: "هذا المنتج غاية ف الروعة ",
        },
      ],
      // comment for details
      rating_value: null,
      comment: null,
    };
  },
  created() {
    this.getProductId();
  },
  methods: {
    Social() {
      this.showSocial = !this.showSocial;
    },
    slideTo(val) {
      this.currentSlide = val;
    },
    reduceItem() {
      if (this.qty <= 1) return;

      this.qty = this.qty - 1;
    },
    increaseItem() {
      this.qty = this.qty + 1;
    },
    submitComment() {
      const myData = new FormData();
      myData.append("rating_value", this.rating_value);
      myData.append("comment", this.comment);
      myData.append("product_id", this.id);
      this.axios({
        method: "POST",
        url: "client/rating",
        data: myData,
      })
        .then((response) => {
          console.log(response);
          this.comment = response.data.data.comment;
          this.rating_value = response.data.data.rating_value;
          console.log(this.comment);
          this.$toast.success(`      تمت اضافة التعليق بنجاح `);
          this.comment = "";
          this.rating_value = "";
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    },
    getProductId() {
      this.axios({
        method: "GET",
        url: `product/${this.id}`,
      }).then((res) => {
        this.productDetails.productName = res.data.data.name;
        this.productDetails.productImage = res.data.data.main_image;
        this.productDetails.productCat = res.data.data.category.name;
        this.productDetails.productRate = res.data.data.rate;
        this.productDetails.productQty = res.data.data.qty;
        this.productDetails.productCity = res.data.data.city.name;
        this.productDetails.productCountry = res.data.data.country.name;
        this.productDetails.Shippingway = res.data.data.shippingWay.name;
        this.productDetails.productStatus = res.data.data.productStatus.name;
        this.productDetails.productSimilar = res.data.data.similar_products;
        console.log(res.data.data);
      });
    },
  },
});
</script>

  <style lang="scss" scoped>
  .carousel__item
 {
  width: 300px;
   background-color: red;
      img{
        width:100%;
        object-fit: cover;
        
      }
   margin-block: 15px;
 }
span {
  color: var(--light_gray_clr);
  font-size: 20px;
}
.more_details {
  font-family: "semi" !important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  font-size: 20px;
}
.v-card {
  background-color: red;
  // height: auto !important;
}
.comment_row {
  display: flex;
  flex-direction: column;
  gap: 40px;
  .comment {
    background-color: var(--background);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0 12px;
    img {
      border-radius: 50%;
    }
    .content {
      line-height: 30px;
      color: var(--main_theme_clr);
      .comment {
        color: var(--p_color);
      }
      span {
        margin-left: 20px;
      }
    }
  }
  .rating {
    padding: 30px 0;
    background-color: var(--background);
    border-radius: 10px;
    span {
      display: block;
      margin: 10px auto;
      width: fit-content;
      font-size: 20px;
    }
    button {
      border: none;
      background-color: var(--main_theme_clr);
      color: white;
      width: 120px;
      padding: 10px 15px;
      border-radius: 10px;
      transition: all 0.3s linear;
      display: block;
      margin: auto;

      &:hover {
        border: 1px solid var(--main_theme_clr);
        background-color: transparent;
        color: var(--main_theme_clr);
      }
    }
    .enter_rating {
      padding: 10px 0;
      margin: 10px auto;
      height: 80px;

      input {
        display: block;
        width: 80%;
        height: 60px;
        margin: auto;
        border: none;
        outline: none;
        background-color: white;
        position: relative;
        text-align: center;
        border-radius: 10px;
      }
    }
  }
}
button {
  border: none;
}
.Product_details {
  // background-color: var(--background);
  color: var(--main_theme_clr);
  .first {
    background-color: var(--background);
    padding: 40px 0;
  }
  .row {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .share {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footer_share {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 150px;
      align-items: center;
      .share_Icon {
        display: flex;
        gap: 30px;
        align-items: flex-start;
        .social_icon {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }
        button {
          transition: all 0.5s ease;
        }
      }
    }
  }

  .data_product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    .content_product {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .header_item {
        flex-direction: row;
        justify-content: space-between;
        color: var(--p_color);
        .name_item,
        .price {
          font-size: 25px;
          color: var(--main_theme_clr);
        }

        .about_item {
          text-align: justify;
          line-height: 35px;
        }
        span {
          color: var(--main_theme_clr);
        }
      }
    }
    .footer_data {
      display: flex;
      justify-content: center;
      gap: 20px;
      .add_cart {
        button {
          width: 200px;
          padding: 15px 10px;
          border-radius: 25px;
          background-color: var(--main_theme_clr);
          color: white;
          transition: all 0.5s linear;
          &:hover {
            color: var(--main_theme_clr);
            background-color: transparent;
            border: 1px solid var(--main_theme_clr);
          }
        }
      }
      .quanty {
        background-color: #edeef1;
        width: 300px;
        padding: 12px 10px;
        border-radius: 25px;
        justify-content: space-around;
        font-size: 22px;
      }
    }
  }
}
.more_details {
  text-align: justify;
  h2 {
    margin-right: 17px;
  }
  .test2 {
    background-color: var(--background);
    padding: 20px 10px;
  }
}

// .comment_section {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

// }
.v-window-item {
  color: var(--main_theme_clr) !important;
  line-height: 50px;
}
.v-tabs {
  background-color: transparent !important;
  color: var(--main_theme_clr) !important;
}
.v-tab.v-tab {
  font-size: large;
}
.v-card--variant-elevated {
  box-shadow: none !important;
  padding: 20px 10px;
}

.similar {
  h2 {
    text-align: justify;
  }
}
// .v-window__container {
//   height: 100px !important;
// }
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--main_theme_clr) !important;
  background-color: transparent !important;
  border-bottom: 1px solid var(--main_theme_clr);
  border-radius: none !important;
}
.nav-pills .nav-link {
  background: none;
  border-radius: 0px !important;
}
.nav-link {
  color: var(--p_color) !important;
}
.nav {
  width: 250px;
  justify-content: space-between;
  font-size: 20px;
}
.more_details_up {
  background-color: var(--theme_main_bg_clr);
  margin: 0px 0;
  padding: 30px 0;
}
</style>
  