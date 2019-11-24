<template lang="html">
  <div class="">
    <calendar
      :total='arr'
    ></calendar>
  </div>
</template>

<script>
import calendar from '@/components/content/calendar/Calendar.vue'
export default {
  data() {
    return {
      arr:[
        {
          value: [2019,11,11],
          name: '모모 생일'
        },
        {
          value: [[2019,11,23], [2019,11,24]],
        },
        {
          value: [2019,11,23],
          name: '아이유 콘서트'
        },

          ]
    }
  },
  components: {
    calendar
  }
}
</script>

<style lang="css" scoped>
</style>
