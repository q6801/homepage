<template lang="html">
    <div class="row col-md-8 mt-4 mb-4">
      <div class="col-md-4">
        <img :src="$store.state.temp.link" alt="이미지가 없음" class="mw-100 ml-5">
      </div>
      <div class="col-md-6 ml-auto">
        <h4>추가하려는 사진이 지금 사진, {{$store.state.temp.name}}사진이 맞습니까?</h4>
        <div class="col-md-12">
          <button type="button" name="button" class="btn btn-primary" @click="yes">예</button>
          <button type="button" name="button" class="btn btn-secondary ml-3" @click="no">아니요</button>
        </div>
      </div>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  data: function() {
    return {
      linked: null
    }
  },
  methods: {
    yes: function() {
      this.$store.commit('addProfile', this.$store.state.temp);
      this.$router.push({name: 'gallery'})
    },
    no: function() {
      this.$router.push({name: 'gallery'})
    }
  }
}
</script>

<style lang="css" scoped>
</style>
