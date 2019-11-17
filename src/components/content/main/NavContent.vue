<template lang="html">
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light pb-5">
      <div class="container pt-4">
        <router-link :to="{name: 'home'}"><h1>승훈스</h1></router-link>
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item mr-3">
              <router-link  :to="{ name: 'profile', query: {profile: 'IU'} }">profile</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link :to="{ name: 'gallery'}">gallery</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link :to="{ name: 'screen'}">calendar</router-link>
            </li>
          </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
</style>
