<template>
  <Header></Header>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <label for="email"> Email:</label>
    <input type="email" name="email" v-model="email" required>
    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>
    <button>Sign Up</button>
    <div v-if="{error}">{{error}}</div>
  </form>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Welcome from '@/components/Welcome.vue'
import Content from '@/components/Content.vue'
import About from '@/components/About.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'AboutView',
  setup() {
    const email =ref('')
    const password = ref('')
    const store= useStore()
    const router =useRouter()
    const error = ref(null)
    const handleSubmit = async  () => {
      try {
        await store.dispatch('signup', {email: email.value,password: password.value})
        router.push('/')
      } catch (err){
        error.value = err.message
      }
      
    }

    return {
      handleSubmit,
      email,
      password,
      error
    }
  },
  components: {
    Header,
    Footer,
    Welcome,
    Content,
    About
  }
}
</script>