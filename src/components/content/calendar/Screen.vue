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
          value: [2019,11,1],
          name: '축제날'
        },
        {
          value: [[2019,11,9], [2019,11,11]],
        },
        {
          value: [[2019,11,10], [2019,11,12]],
        },
        {
          value: [2019,11,8],
          name: '시험데스'
        },
        {
          value: [[2019,11,15], [2019,11,16]],
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
