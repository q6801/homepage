import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      thumbSrc: {
        IU: { name:'IU', source: require('@/assets/img/thumb/ThumbIU.jpg')},
        NaYeon: { name:'NaYeon', source: require('@/assets/img/thumb/ThumbNaYeon.jpg')},
        SeulGi: { name:'SeulGi', source: require('@/assets/img/thumb/ThumbSeulGi.jpg')},
        YooA: { name:'YooA', source: require('@/assets/img/thumb/ThumbYooA.jpg')}
      },
      profile: {
        IU: { name: 'IU(이지은)', birth: '1993년 5월 16일 (26세)', interview: "신뢰가 가는 사람이 되고 싶어요. 종종 그런 사람이 있잖아요.\
            취향이나 호불호를 떠나서 적어도 빈말은 안 할 것 같은 사람. 개인적으로도,\
            가수와 배우로서도 그런 신뢰할 수 있는 사람이 되기 위해 더 노력하고 있어요. -2019년 10월 10일 데이즈드 코리아(DAZED KOREA) 인터뷰 중-"},
        NaYeon: {name: '임나연', birth: '1995년 9월 22일 (24세)', interview: "흔한 이야기일 수도 있지만, 자신이 그리는 꿈을 몇번이고 상상하세요.\
                그리고 그걸 상상하지만 말고 실천으로 이어가는 거예요. - 2019년 2월 26일자 모델프레스 인터뷰 중-" },
        SeulGi: {name: '강슬기', birth: '1994년 2월 10일 (23세)', interview: "나는 연습할 때인데 노래를 부르는데 노래하기가 너무 싫은거야. 내가 할 줄 아는 건 노래랑 춤밖에 없는데\
                이걸 못하면 나는 이제 뭐 하지? 근데 내가 여기서 더 하면은 안 좋아질 건 없다는 생각이 들었어. 오늘 내가 못 하더라도 한 시간 연습을 더 해.\
                그럼 한 시간 전의 나보단 한시간 후의 내가 더 잘할거 아냐. 그렇게 몇 년을 더 했지"},
        YooA: {name: '유시아', birth: '1995년 9월 17일 (24세)', interview: "무대 위에 섰을 때 행복을 느끼는 사람이다. 내가 맡은 파트 만큼은 꼭 해내고 싶다"}
      },
      gallerys: {
        IU: {name: 'IU', photos: [
          "https://i.pinimg.com/236x/80/f7/9f/80f79f98e955c1852ec0fd3bb2bc1499.jpg",
          "https://i.pinimg.com/236x/6b/53/da/6b53da9cb2ce5d8b3a403e631b88538b.jpg",
          "https://i.pinimg.com/236x/b4/ec/20/b4ec203cbf75b42110a1092dd7cac053.jpg",
          "https://i.pinimg.com/236x/4b/8b/72/4b8b72bf9718b7211afdb7096b8343fe.jpg",
          "https://i.pinimg.com/236x/11/e4/11/11e411eb32335070ca9b2b7aaa921bb8.jpg"
        ]},
        NaYeon: {name: 'NaYeon', photos: [
          "https://i.pinimg.com/236x/95/b1/f1/95b1f1169f45fb9454c8ac475262c5a7.jpg",
          "https://i.pinimg.com/236x/5b/69/c4/5b69c444c63ff2e6183615cb2cae8c18.jpg",
          "https://i.pinimg.com/236x/55/cc/e7/55cce77d3675a5a147c18b9a6d5d660e.jpg",
          "https://i.pinimg.com/236x/73/eb/1c/73eb1c61f79c71386a664c5914ba9905.jpg",
          "https://i.pinimg.com/236x/c0/a8/dd/c0a8dd8d05718ad9ea61e8fc67d55cf3.jpg"
        ]},
        SeulGi: {name: 'SeulGi', photos: [
          "https://i.pinimg.com/236x/7b/46/74/7b467400df8636cffc2dcb4bf36e51ed.jpg",
          "https://i.pinimg.com/236x/8b/d2/7e/8bd27e043b72d9124c4d6940caf1a8aa.jpg",
          "https://i.pinimg.com/236x/f9/b6/5c/f9b65cb55ba8064945dc00a8a4175425.jpg",
          "https://i.pinimg.com/236x/23/21/c2/2321c255df55615ea54a8c369e14ea20.jpg",
          "https://i.pinimg.com/236x/6e/33/d8/6e33d8a26dbffebc6cf88ed460e3d73a.jpg",
        ]},
        YooA: {name: 'YooA', photos: [
          "https://i.pinimg.com/236x/bc/a3/0a/bca30a605b64abe7d4c1a8f57a7b8191.jpg",
          "https://i.pinimg.com/236x/4b/b2/89/4bb289173150db388e8ca304d15c302f.jpg",
          "https://i.pinimg.com/236x/94/03/fb/9403fb2b33ea764d23ac734c93ae9d50.jpg",
          "https://i.pinimg.com/236x/c3/06/f6/c306f6edba78844713b8ce455095f3f5.jpg",
          "https://i.pinimg.com/236x/14/75/a1/1475a19d24aa8f0991da09dedc1df1c6.jpg"
        ]}
      },
      temp: {
        link:null,
        name:null
      }
  },
  mutations: {
    checkLink(state, payload) {
      state.temp.link = payload.link;
      state.temp.name = payload.name;
    },
    addProfile(state, payload) {
      let name = payload.name
      let girl
      for (girl in state.gallerys) {
        if(name == girl) {
          let str = `state.gallerys.${payload.name}.photos.push(payload.link)`;
          eval(str);
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
