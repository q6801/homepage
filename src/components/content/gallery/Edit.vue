<template lang="html">
  <div class="col-md-12 row mt-5">
      <label for="userLink" class="text-center col-md-12"><h2>추가할 사진의 링크를 넣으세요</h2></label>
      <input v-model="sendData.link" type="text" id="userLink" class="form-control mb-3 col-md-7" placeholder="사진의 링크를 넣어주세요." aria-label="userlink" aria-describedby="basic-addon1">
    <div class="mb-3 col-md-3">
      <input v-model="sendData.name" type="text" id="userLink" class="form-control mb-3" placeholder="이름">
    </div>
    <div class="col-md-2">
      <button type="button" name="button" class="btn btn-primary" @click="sendLink">버튼</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  data: function() {
    return {
      sendData: {
        link:null,
        name:null
      }
    }
  },
  methods: {
    sendLink: function() {
      this.$store.commit('checkLink', this.sendData);
      this.$router.push({name: 'check'});
    }
  }
}
</script>

<style lang="css" scoped>
</style>
