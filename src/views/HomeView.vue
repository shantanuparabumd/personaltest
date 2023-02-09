<template>
  <Welcome v-if="welcome" @click="welcome=false"></Welcome>
  <Header></Header>
  <p>Heloo</p>
  <div class="about"><About></About></div>
  <!-- <div class="news">
    <News></News>
  </div> -->
  <!-- <Content></Content> -->
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Welcome from '@/components/Welcome.vue'
import Content from '@/components/Content.vue'
import About from '@/components/About.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Welcome,
    Content,
    About
  }
}
</script>
