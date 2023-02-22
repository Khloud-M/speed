<template>
  <div class="choose_type">
    <div class="container">
      <div class="row d-flex">
        <div class="categery" v-for="item in categery" :key="item.id">
         <router-link :to="{
            name:'filterComp',
              params:{id: item.id},
         }" > 
          <div class="image">
            <img :src="item.image" width="60" height="60" />
          </div>
         </router-link>
          <div class="name">
            <span> {{ item.name }} </span>
          </div>
          <!-- <img :src="item.image"/> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categery: null,
    };
  },
  methods: {
    getCategery() {
      this.axios({
        method: "GET",
        url: "home",
      })
        .then((res) => {
          this.categery = res.data.data.categories;
          console.log(this.categery);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getCategery();
  },
};
</script>
<style lang="scss" scoped>
.choose_type {
  margin: 100px 0;
  
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    .categery {
      background-color: var(--theme_main_bg_clr);
      border-radius: 15px;
      width: 24%;
      padding: 10px;
      color: var(--theme_text_clr);
      display: flex;
      flex-direction: column;
      gap: 20px;
      cursor: pointer;
      
    }
  }
}
</style>
