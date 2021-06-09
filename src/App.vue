<template>
  <div id="app">
    <router-view v-bind="userInfo">
    </router-view>
  </div>
</template>

<script>
export default {
  props: [
    'userInfo'
  ]
}
</script>

<style lang="scss">
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

html, h1, h2, h3, h4, h5,h6{
  padding: 0px;
  margin: 0px;
  font: 100%;
}
</style>
