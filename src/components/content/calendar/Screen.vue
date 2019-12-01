<template lang="html">
  <div class="row">
    <calendar
      class="col-md-8"
      :total='$store.state.calendarValue'
    ></calendar>

    <div class="col-md-4" @keyup.enter="sendData">
      <p>날짜 입력</p>
      <div class="col-12 mb-3" v-if="changeButton">
        <input class="form-control" type="text" v-model="value" placeholder="(ex)20191201">
      </div>
      <div class="col-12 mb-3" v-else>
        <input class="form-control" type="text" v-model="rangeValue1" placeholder="여기부터">
        <input class="form-control" type="text" v-model="rangeValue2" placeholder="여기까지">
      </div>
      <div class="col-12">
        <input class="form-control" type="text" v-model="name" placeholder="제목">
        <input class="form-control" type="text" v-model="contents" placeholder="내용">
      </div>
      <div class="col-12 mt-3">
        <button class="col-12 btn btn-outline-secondary" type="button" name="button" @click="sendData">입력</button>
        <button class="col-12 btn btn-outline-secondary" type="button" name="button" @click="changeButton = !changeButton">캐릭캐릭체인지</button>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from '@/components/content/calendar/Calendar.vue'
export default {
  components: {
    calendar
  },
  data() {
    return {
      changeButton: true,
      value:[],
      rangeValue2:[],
      rangeValue1:[],
      name:'',
      contents:''
    }
  },
  methods: {
    sendData() {
      let tempValue = this.value
      if(!this.changeButton) {
        tempValue = [this.rangeValue1, this.rangeValue2]
      }
      let temp = {value: tempValue, name: this.name, contents: this.contents}
      this.$store.dispatch('checkCalendarSequence', temp)
      this.value = this.name = this.contents = this.rangeValue1 = this.rangeValue2 = null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
