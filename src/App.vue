<template>
  <div>
    Name:
    <input v-model="name" type="text">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'App'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
