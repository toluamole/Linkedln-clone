<template>
  <nav class="nav flex justify-between items-center mt-4">
    <img class="nav-logo ml-28 w-32" src="@/assets/images/login-logo.svg" alt="">
    <ul class="nav-link mr-20 text-base font-medium flex justify-between items-center">
      <li class="nav-link-item-1 mr-12 text-gray-500 hover:bg-gray-200 cursor-pointer hover:border hover:rounded-sm  hover:text-black">Join now</li>
      <li class="nav-link-item-2 mr-12 p-2 border w-28 border-blue-700 text-blue-700 text-center rounded-3xl cursor-pointer hover:bg-blue-200">Sign in</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .nav{
   &-link{
     &-item{
       &-1{
         &:hover{
           border-radius: 3px;
           transform:none;
         }
       }
     }
   }
 }
</style>
