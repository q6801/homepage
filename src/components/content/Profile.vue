<template lang="html">
  <div class="mt-5">
    <div class="row">
      <div class="col-md-3">
        <profileImages></profileImages>
      </div>
      <div class="col-md-6">
        <img :src="profileImages" alt="@/assets/profile/ProfileIU.jpg" class="img-profile mw-100">
      </div>
      <div class="col-md-3">
        <h3 class="mb-5">이름: {{profiles.name}}</h3>
        <h4 class="mb-5">생년월일: {{profiles.birth}}</h4>
        <h5>인터뷰:</h5> {{profiles.interview}}
      </div>
    </div>
  </div>
</template>

<script>
import profileImages from './ProfileImages.vue'
export default {
  data: function() {
    return {
      first: ""
    }
  },
  computed: {
    profileImages: function() {
      return  require(`@/assets/profile/Profile${this.$route.query.profile}.jpg`)
    },
    profiles: function() {
      return eval(`this.$store.state.profile.${this.$route.query.profile}`)
    }
  },
  components: {
    profileImages
  }
}
</script>

<style lang="css" scoped>
.img-profile {
  width: 570px;
}
</style>
