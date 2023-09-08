<template>
  <div id="app" class="app">
    <Header></Header>
    <Home></Home>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Projects.vue'; // Updated to 'Projects'
import Contact from './components/Contact.vue';
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Project,
    Contact,
    Footer
}
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  max-width: 1690px;
  margin: 0 auto;
}


</style>
