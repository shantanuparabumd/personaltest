<template>
    <div class="header"><ul>
  <li :class="{ active: isHome }" ><router-link to="/" >Home</router-link></li>
  <li :class="{ active: isNews }" ><router-link to="/news">News</router-link></li>
  <li :class="{ active: isContact }"><router-link to="/contact">Contact</router-link></li>
  <li :class="{ active: isAbout }" ><router-link to="/about">About</router-link></li>
  <li :class="{ active: isAbout }" ><router-link to="/projects">Projects</router-link></li>
</ul>
</div>

</template>
<script>
export default {
  name: 'Header',
  data() {
    return{
      isHome : true,
      isNews : false,
      isContact : false,
      isAbout : false
    }
    
  },
  methods: {
    actHome(n){
      console.log(n);
      if (n==1){
        this.isHome=true;
        this.isNews=false;
        this.isContact=false;
        this.isAbout=false;
      }
      else if(n==2){
        this.isHome=false;
        this.isNews=true;
        this.isContact=false;
        this.isAbout=false;

      }
      else if (n==3){
        this.isHome=false;
        this.isNews=false;
        this.isContact=true;
        this.isAbout=false;

      }
      else{
        this.isHome=false;
        this.isNews=false;
        this.isContact=false;
        this.isAbout=true;

      }
    }
  }
}
</script>

<style scoped>
.active{
  background-color: aquamarine;
}
.header{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: #333;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
