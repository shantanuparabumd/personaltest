<template>
    <Header></Header>
    <div>Contact</div>
    <Contact></Contact>
    <Footer></Footer>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Welcome from '@/components/Welcome.vue'
  import Content from '@/components/Content.vue'
  import About from '@/components/About.vue'
  import Contact from '@/components/Contact.vue'
  
  export default {
    name: 'ContactView',
    components: {
      Header,
      Footer,
      Welcome,
      Content,
      Contact,
      About
    }
  }
  </script>