<template lang="html">
  <div class=" row">
    <div class="col-sm-12 col-3" v-for="something in $store.state.thumbSrc">
      <router-link :to="{ query: {profile: something.name} }">
        <img :src="something.source" class="img-thumbnail mb-3">
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.img-thumbnail {
  width: 100px;
}
</style>
