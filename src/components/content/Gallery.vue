<template>
  <div class="">
    <div class="row bg-light">
      <button type="button" name="button"
        class="btn btn-light mx-auto"
        @click="$router.push({name: 'edit'})"><h1>새로운 사진 더하기</h1></button>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="gallery in $store.state.gallerys">
        <div class="" v-for="picture in gallery">
          <img :src="picture" alt="" class="rounded mb-4 mw-100 picture" >
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Check from './Check.vue'
import Edit from './Edit.vue'
export default {
  data: function() {
    return {
      hi: ""
    }
  },
  components: {
    Check,
    Edit
  },
  methods: {
    changeOpacity: function() {
      this.hi = "hello"
    }
  }
}
</script>
<style media="screen" scoped>
.picture:hover {
  opacity: 0.7;
  transition: all 0.5s ;
}
</style>
