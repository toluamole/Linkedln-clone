<template>
  <div class="home">
    <Header/>
    <Suggested/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Suggested from '@/components/Suggested.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Suggested
  }
}
</script>
