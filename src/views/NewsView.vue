<template>
    <Header></Header>
    <!-- <div>Hello</div> -->
    <!-- <New></New> -->
    <Footer></Footer>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Welcome from '@/components/Welcome.vue'
  import Content from '@/components/Content.vue'
  import About from '@/components/About.vue'
  // import New from '@/components/New.vue'
  
  export default {
    name: 'NewsView',
    components: {
      Header,
      Footer,
      Welcome,
      Content,
      About,
    }
  }
  </script>