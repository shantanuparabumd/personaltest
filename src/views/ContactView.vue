<template>
    <Header></Header>
    <h1>Contact</h1>
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
    name: 'ContactView',
    components: {
      Header,
      Footer,
      Welcome,
      Content,
      About
    }
  }
  </script>