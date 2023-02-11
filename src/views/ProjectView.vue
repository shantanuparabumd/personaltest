<template>
    <Header></Header>
    <div class="content">
      <Content ></Content>
    </div>
    
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
    name: 'ProjectsView',
    components: {
      Header,
      Footer,
      Welcome,
      Content,
      About
    }
  }
  </script>

  <style scoped>
   .content{
    position: absolute;
    top: 50px;
    
   }
  </style>