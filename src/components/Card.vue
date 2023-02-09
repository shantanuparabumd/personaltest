<template>
    
<div class="card">
    <h3>{{ Title }}</h3>
    <img :src= "require(`../assets/${Image}.jpg`)" class="card_image" alt="Project Image"/>
    <p>{{ Content }}</p>
</div>
      
</template>
<script>

export default {
    props: ['Title','Image','Content'],
    data () {
      return {
       image: 'deepika'
          }
    }
}
</script>

<style scoped>

/* Style the counter cards */
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
}
.card_image{
    width: 380px;
    height: 400px;
}



</style>