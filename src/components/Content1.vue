<template>
<div class="row">
  <div  v-for="p in projects" :key="p.id" class="col">
      <Card :Title="p.title" :Content="p.content" :Image="p.image" />
    
  </div>
</div>

  
</template>
<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import {data} from '@/store/projects'

export default {
  name: 'Content',
  data() {
    return {
      projects : data,
      showModal: false
    }
  },
  components: {
    Card
  }
}
</script>
<style scoped>
/* Float four columns side by side */
.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 1;
  margin: 10px;
}

@media (min-width: 768px) {
  .col {
    flex: 1 1 calc(33.33% - 20px);
  }
}

@media (min-width: 992px) {
  .col {
    flex: 1 1 calc(25% - 20px);
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  /* padding: 16px; */
  text-align: center;
  background-color: #f1f1f1;
  /* width: 90%; */
  /* margin-bottom: 5px; */
}


  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>