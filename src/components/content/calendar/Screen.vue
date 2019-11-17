<template lang="html">
  <div class="">
    <calendar
      :value='calendar1.value'
      :range='calendar1.range'
      :begin='calendar1.begin'
      :end='calendar1.end'
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
