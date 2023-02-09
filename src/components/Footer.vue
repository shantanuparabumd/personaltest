<template>
    <div class="footer">
  <p>Footer</p>
 
</div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  setup() {
    const b=ref([
      {title: 'Jajj', id: 1}
    ])
    const store = useStore()
    console.log(store.state.user)
    store.commit('setUser', 'Yoshi')
  return {
    b
  }
  }
}
</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
}

</style>