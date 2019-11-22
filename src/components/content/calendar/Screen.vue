<template lang="html">
  <div class="">
    <calendar
      :value='calendar1.value'
      :range='calendar1.range'
      :rangeValue='calendar1.rangeValue'
    ></calendar>
  </div>
</template>

<script>
import calendar from '@/components/content/calendar/Calendar.vue'
export default {
  data() {
    return {
      calendar1:{
        value: [2019,11,17],
        range: true,
        rangeValue: [[2019,11,4], [2019,11,8]]
      },
    }
  },
  components: {
    calendar
  }
}
</script>

<style lang="css" scoped>
</style>
