<template>
  <section class="cart">
    <button @click="showCart">
      <img src="@/assets/image/cart.png" alt="cart" />
      <div class="toolTip">{{ $t("navs.cart") }}</div>
    </button>
    <transition name="mobile-nav" appear v-if="show">
      <div class="sidebarCat">
        <div class="container_cart">
          <div class="close-nav" @click="closeCart">X</div>

          <div class="content_cart">
            <empty-cart />
          </div>
          <!-- content_dropdown-->
        </div>
        <!-- container_dropdowm-->
      </div>
    </transition>
  </section>
</template>
<script>
import emptyCart from "./emptyCart.vue";
export default {
  components: {
    emptyCart,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showCart() {
      this.show = true;
    },
    closeCart() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  overflow: hidden;
  button {
    border: none;
    background-color: white;
    position: relative;
    transition: all 1s ease-in-out;
    height: 85px;
    width: 60px;

    .toolTip {
      display: none;
      font-size: 13px;
      color: var(--main_theme_clr);
      background: var(--background);
      position: absolute;
      bottom: -5px;
      width: 50px;
      left: 5px;
      border-radius: 15px;
      transition: all 1s ease-in-out;

      transform: scale(0);
    }

    &:hover .toolTip {
      transform: scale(1);
      display: block;
    }
  }

  .sidebarCat {
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999999;
    .container_cart {
      background-color: var(--background);
      height: 100vh;
      width: 500px;
      right: 0;
      position: relative;
      padding: 10px;
      .close-nav {
        left: 20px;
        top: 20px;
        position: absolute;
        background-color: white;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        line-height: 35px;
        transition: all 0.3s ease;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          transform: rotate(180deg);
          color: red;
        }
      }
      .content_cart {
        margin: 150px auto;
        width: 80%;
        color: var(--main_theme_clr);
        h5 {
          margin: 50px 0;
          font-size: 25px;
        }
      }
    }
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-150%);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
</style>