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
    <table class="table">
      <thead cellpadding="30">
        <tr>
          <td class="week-inner" v-for="week in weeks"><h1>{{week}}</h1></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days">
          <td v-for="child in day"
            class="table-data"
            :class="{'font-weight-light':child.disabled,
                    'font-weight-bolder':!child.disabled,
                    'selected':child.selected,
                    'text-primary':child.today,
              }">
              <div class="row">
                <div class="col-12">
                    {{child.day}}
                </div>
                <div class="col-12 mb-1 schedule" v-html="child.view"></div>
                <div class="col-12 mb-1 schedule" :class="{'paint': child.range0Selected}"></div>
                <div class="col-12 mb-1 schedule" :class="{'paint': child.range1Selected}"></div>
                <div class="col-12 mb-1 schedule" :class="{'paint': child.range2Selected}"></div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="">
      {{today}}
    </div>
    <button type="button" name="button" class="btn btn-primary" @click="prev">지난달</button>
    <button type="button" name="button" class="btn btn-primary" @click="next">다음달</button>
  </div>
</template>

<script>
export default {
  props: {
    total:{
        type: Array,
        default: function() {
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
        today: [],
        rangeBegin:[],
        rangeEnd:[],
        hi: 0,
        lastOverlap: [-1],
        value: [],
        range: false,
        name: ''
    }
  },
  watch:{
      events(){
          this.render(this.year,this.month)
      },
      // value(){
      //     this.init()
      // },

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
        let now = new Date()
        this.year = now.getFullYear()
        this.month = now.getMonth()
        this.day = now.getDate()


        let i = 0
        this.total.forEach(element => {
            if(element.value.length == 2) {
                let year1 = parseInt(element.value[0][0])
                let month1 = parseInt(element.value[0][1]) - 1 // 0이 1월
                let day1 = parseInt(element.value[0][2])

                let year2 = parseInt(element.value[1][0])
                let month2 = parseInt(element.value[1][1]) - 1
                let day2 = parseInt(element.value[1][2])

                this.rangeBegin.push([year1, month1, day1, i])
                this.rangeEnd.push([year2, month2 , day2, i])
            }
            else {
              let temp = element.value
              temp.push(i)
              this.value.push(element.value)
            }
            ++i
        })

        // if (this.value.length>0) {
        //     if (this.range) {
        //         this.value.forEach((value) => {
        //           let year1 = parseInt(value[0][0])
        //           let month1 = parseInt(value[0][1]) - 1 // 0이 1월
        //           let day1 = parseInt(value[0][2])
        //
        //           let year2 = parseInt(value[1][0])
        //           let month2 = parseInt(value[1][1]) - 1
        //           let day2 = parseInt(value[1][2])
        //
        //           this.rangeBegin.push([year1, month1, day1])
        //           this.rangeEnd.push([year2, month2 , day2])
        //         })
        //     }
        //
        // }
        this.render(this.year, this.month)
    },
    render(y, m) {
      let now = new Date();
      this.today = [now.getFullYear(), now.getMonth()+1, now.getDate()]
      let firstDayOfMonth = new Date(y, m, 1).getDay()
      let lastDateOfMonth = new Date(y, m + 1, 0).getDate()
      let lastDayOfLastMonth = new Date(y, m, 0).getDate()
      let i, temp = [], line=0, currState = []
      let seletSplit = this.value
      let beginTime=[], endTime=[]


      for(let k=0; k<this.rangeBegin.length; k++) {
        beginTime.push(Number(new Date(this.rangeBegin[k][0], this.rangeBegin[k][1], this.rangeBegin[k][2])))
        endTime.push(Number(new Date(this.rangeEnd[k][0], this.rangeEnd[k][1], this.rangeEnd[k][2])))
      }

      for(i = 1; i <= lastDateOfMonth; i++) {       // 이번 달이 아닌 지난 날들의 마지막 일들
        let day = new Date(y, m, i).getDay()
        let k
        let options = {day: i}

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


          let stepTime = Number(new Date(this.year, this.month, i))
          let overlap = 0
          let some = false
          let num = 0
          currState = []

          for(let k=0; k<this.rangeBegin.length; k++) {
            if(beginTime[k] <= stepTime && stepTime <= endTime[k] ) {
              eval(`options.range${overlap.toString()}Selected = true`)
              overlap++
              currState.push(k)
              if(this.lastOverlap[0] === -1) {
                this.lastOverlap[0] = k
              }
            }
          }
          let sequence = false
          currState.forEach(element => {
            for(let q=0; q<this.lastOverlap.length; q++) {
              if(element === this.lastOverlap[q]) {
                sequence = true
              }
            }
          })
          if(!sequence) {
              this.lastOverlap = []
          }
          if(this.lastOverlap[0] !== -1) {
            if(this.lastOverlap.length > overlap) {
              for(let j=0; j<currState.length; j++) {
                  num = currState[j] - this.lastOverlap[0]
                  eval(`options.range${(overlap-1).toString()}Selected = false`)
                  eval(`options.range${num.toString()}Selected = true`)
              }
            }

            currState.forEach(element => {
              if(this.lastOverlap.indexOf(element) === -1) {
                this.lastOverlap.push(element)
              }
            })
          }

        for(let k = 0; k < seletSplit.length; k++) {
          if(seletSplit[k][0] === y && seletSplit[k][1]-1 === m && seletSplit[k][2] === i) {   // 선택된 날들이거나
            options.selected = true
            options.view = this.total[seletSplit[k][3]].name
          }
        }
        if(this.today[0] === y && this.today[1]-1 === m && this.today[2] === i) {    // 오늘이거나
          options.today = true
        }
        if(i == lastDateOfMonth && day != 6) {                                          // 이번달의 마지막이거나
          let lastDay = new Date(y, m+1, 0).getDay()
          let k = 1
          temp[line].push(options)
          for(let j = lastDay; j < 6; j++) {
            options.disabled = true
            temp[line].push(options)
            k++
          }
        } else {                                                                      // 평범한 날이거나
            temp[line].push(options)
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
.week-inner  {
  text-align: center;
}
.table-data {
  text-align: center;
  height: 70px;
}
.schedule {
  height: 15px;
}
.paint {
  background-color: #BBDEFB;
}

</style>
