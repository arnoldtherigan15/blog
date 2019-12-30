<template>
  <div id="app">
    <Navbar/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar, Footer
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  background-color: black;
  height:100vh;
}
</style>
