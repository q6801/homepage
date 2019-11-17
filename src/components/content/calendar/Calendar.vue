<template lang="html">
  <div class="">
    <div class="calendar-info" @click.stop="changeYear">
      <div class="month">
          <div class="month-inner" :style="{'top':-(this.month*20)+'px'}">
              <span>{{months[month]}}</span>
          </div>
      </div>
      <div class="year">{{year}}</div>
    </div>
    <table>
      <thead cellpadding="30">
        <tr>
          <td v-for="week in weeks"><h1>{{week}}</h1></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days">
          <td v-for="child in day" @click="hello"
            :class="{'font-weight-light':child.disabled, 'font-weight-bolder':!child.disabled, 'selected':child.selected}">
            {{child.day}}
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" name="button" class="btn btn-primary" @click="prev">왼쪽</button>
    <button type="button" name="button" class="btn btn-primary" @click="next">오른쪽</button>
  </div>
</template>

<script>
export default {
  props: {
    range:{
        type: Boolean,
        default: false
    },
    value: {
        type: Array,
        default: function(){
            return []
        }
    },
    begin:  {
        type: Array,
        default: function(){
            return []
        }
    },
    end:  {
        type: Array,
        default: function(){
            return []
        }
    },
    zero:{
        type: Boolean,
        default: false
    },
    disabled:{
        type: Array,
        default: function(){
            return []
        }
    },
    events:  {
        type: Object,
        default: function(){
            return {}
        }
    },
  },
  data() {
      return {
        months: ['1월', '2월', '3월', '4월', '5월',
        '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        weeks: ['일', '월', '화', '수', '목', '금', '토'],
        years:[],
        yearsShow:false,
        year: 0,
        month: 0,
        day: 0,
        days: [],
        multiDays:[],
        today: [],
        rangeBegin:[],
        rangeEnd:[],
        hi: 0
    }
  },
  watch:{
      events(){
          this.render(this.year,this.month)
      },
      value(){
          this.init()
      },

  },
  mounted() {
    this.init()
  },
  methods: {
    hello() {
      console.log('hi')
    },
    init() {
        let now = new Date();
        this.year = now.getFullYear()
        let hello = this.year
        console.log(hello)
        this.month = now.getMonth()
        this.day = now.getDate()
        if (this.value.length>0) {
            if (this.range) {
                this.year = parseInt(this.value[0][0])
                this.month = parseInt(this.value[0][1]) - 1 // 0이 1월
                this.day = parseInt(this.value[0][2])

                let year2 = parseInt(this.value[1][0])
                let month2 = parseInt(this.value[1][1]) - 1
                let day2 = parseInt(this.value[1][2])

                this.rangeBegin = [this.year, this.month,this.day]
                this.rangeEnd = [year2, month2 , day2]
            }else {
                this.year = parseInt(this.value[0])
                this.month = parseInt(this.value[1]) - 1
                this.day = parseInt(this.value[2])
            }
        }
        this.render(this.year, this.month)
    },
    render(y, m) {
      let firstDayOfMonth = new Date(y, m, 1).getDay()
      let lastDateOfMonth = new Date(y, m + 1, 0).getDate()
      let lastDayOfLastMonth = new Date(y, m, 0).getDate()
      let i, temp = [], line=0
      let seletSplit = this.value
      for(i = 1; i <= lastDateOfMonth; i++) {
        let day = new Date(y, m, i).getDay()
        let k

        if(day == 0) {
          line++;
          temp[line] = []
        } else if (i == 1) {
          temp[line] = []
          k = lastDayOfLastMonth - firstDayOfMonth + 1
          for(let j = 1; j <= firstDayOfMonth; j++) {
            temp[line].push({day: k, disabled: true})
            k++;
          }
        }
        if(seletSplit[0] === y && seletSplit[1]-1 === m && seletSplit[2] === i) {
          temp[line].push({day: i, selected: true})
        }
        else {
          if(i == lastDateOfMonth && day != 6) {
            let lastDay = new Date(y, m+1, 0).getDay()
            let k = 1
            temp[line].push({day: i, disabled: false})
            for(let j = lastDay; j < 6; j++) {
              temp[line].push({day: k, disabled: true})
              k++
            }
          } else {
              temp[line].push({day: i, disabled: false})
          }
        }

    }
    this.days = temp
  },
    next(e) {
      if(this.month == 11) {
        this.month = 0
        this.year = this.year + 1
      } else {
        this.month += 1
      }
      this.render(this.year, this.month)
    },
    prev(e) {
      if(this.month == 0) {
        this.month = 11
        this.year -= 1
      } else {
        this.month -= 1
      }
      this.render(this.year, this.month)
    }
  }
}
</script>

<style lang="css" scoped>
.selected {
  color: red;
}
</style>
