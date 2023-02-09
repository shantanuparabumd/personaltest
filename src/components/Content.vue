<template>
<div class="row">
  <div v-for="p in projects" :key="p.id" class="column">
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
      projects : data
    }
  },
  components: {
    Card
  }
}
</script>
<style scoped>
/* Float four columns side by side */

.column {
  float: left;
  width: 25%;
  /* padding: 5px 5px; */
}

/* Remove extra left and right margins, due to padding in columns */
.row {margin: 5px 0px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  width: 90%;
  margin-bottom: 5px;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>