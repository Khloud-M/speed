<template>
  <section>
    <div class="container">
      <emptyCart v-if="getdata.length <= 0" />
      <div class="row" v-else>
        <div v-for="item in getdata" :key="item.id" class="data">
          <div class="image">
            <img :src="item.main_image" />
          </div>
          <p>{{ item.name }}</p>
          <p> {{  item.category.name }}</p>
          <p> {{  item.product_price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emptyCart from "@/components/home/cart/emptyCart.vue";
export default {
  components: {
    emptyCart,
  },
  computed: {
    getdata() {
      return this.$store.getters["authModle/data"];
    },
  },
};
</script>
<style  lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
}
.data {
  width: 300px;
  box-shadow: 0 0 10px 2px var(--mid_shadow_clr);
  .image {
    width: 280px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      vertical-align: middle;
    }
  }
}
</style>

