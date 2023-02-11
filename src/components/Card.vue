<template>
    
<div @click="showModal = true" class="card">
    <div class="head"><h3>{{ title }}</h3></div>
    <img :src= "require(`../assets/${image}.jpg`)" class="card_image" alt="Project Image"/>
    <div  class="content"><div class="tag">Tag 1</div>
                <div class="tag">Tag 2</div>
                <div class="tag">Tag 3</div></div>
</div>
<transition name="modal">
      <div v-if="showModal" class="modal-overlay">
        
          <div class=" modal-content">
              <div class="left-side">
                <div class="image-container">
                  <img :src= "require(`../assets/${image}.jpg`)" alt="Image">
                </div>
                
                <p class="short-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo vel dui feugiat, non fringilla lectus congue.</p>
                <!-- <font-awesome-icon icon="fa-brands fa-github" /> -->
                <font-awesome-icon :icon="['fab', 'fa-github']"/>
                <a href="https://github.com" class="github-link">
                Visit GitHub
                </a>
                <a href="https://www.youtube.com/channel/UC7jAoyj0u_H0dS_aSZtGzZQ" class="youtube-link">
                  <font-awesome-icon :icon="['fab', 'fa-youtube']"/>
                Subscribe to our YouTube channel
              </a>
              </div>
              <div class="right-side">
                <h2 class="title">{{ title }}</h2>
                <p class="long-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo vel dui feugiat, non fringilla lectus congue. Nam aliquet, nisi et volutpat tempor, nisi nisi congue ligula, a pellentesque magna nisl ac libero. Nam at diam viverra, tincidunt ligula in, feugiat sapien. Nulla facilisi. Nulla eget velit tempor, congue velit id, auctor velit. Curabitur lacus velit, mollis vel erat a, egestas viverra sapien.</p>
                <div class="tag">Tag 1</div>
                <div class="tag">Tag 2</div>
                <div class="tag">Tag 3</div>
              </div>
          <button @click="showModal = false"><font-awesome-icon :icon="['fas', 'fa-backward']"/></button>
        </div>
      </div>
</transition>
      
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
    data () {
      return {
       showModal: false
          }
    },
    components: {
      FontAwesomeIcon
    }
}
</script>

<style scoped>

/* Style the counter cards */
.card {
    padding: 20px;
    text-align: left;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.head {
    text-align: center;
    /* background-color: #217b3a; */
    width: 100%;
    height: fit-content;
}
.content {
    text-align: center;
    /* background-color: #6b9075; */
    width: 100%;
    height: fit-content;
}


.card_image{
  width: 100%;
  height: 200px;
  object-fit: fill;
  border-radius: 10%;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex; justify-content: space-between;

}

.modal-fade-enter-active {
  transition: all 0.3s ease-out;
}

.modal-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.container {
    display: flex;
    height: 100vh;
  }

  .left-side,
  .right-side {
    width: 50%;
    padding: 50px;
  }

  .left-side {
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    float: left;
  }

  .left-side img {
    width: 100%;
    height: 100%;
    /* margin-bottom: 20px; */
    object-fit: contain;
  }
  .image-container {
    width: 600px;
    height: 300px;
    overflow: hidden;
  }

  .right-side {
    /* display: flex;
    flex-direction: column; */
    justify-content: center;
    float: right;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .long-content {
    font-size: 18px;
  }

  .tag {
    display: inline-block;
    padding: 5px 10px;
    background-color: lightblue;
    color: white;
    font-size: 14px;
    border-radius: 20px;
    margin-right: 10px;
  }

  .github-link {
    display: inline-block;
    padding: 10px 15px;
    background-color: #333;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    text-decoration: none;
  }

  .github-icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  .youtube-link {
  display: inline-flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.youtube-link i {
  margin-right: 10px;
  font-size: 24px;
  color: #ff0000;
}
</style>