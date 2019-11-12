<template>
  <div class="">
    <div class="container-fluid">
      <nav-content></nav-content>
    </div>
    <div class="container">
      <router-view></router-view>
      <footer-content></footer-content>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavContent from '@/components/content/main/NavContent.vue'
import FooterContent from '@/components/content/main/FooterContent.vue'

export default {
  components: {
    NavContent,
    FooterContent
  }
}
</script>
