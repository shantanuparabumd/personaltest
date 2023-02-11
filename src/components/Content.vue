<template>
    <div class="container">
      <div class="row" v-for="(row, index) in rows" :key="index">
        <div class="column" v-for="card in row" :key="card.id">
          <Card :title="card.title" :content="card.content" :image="card.image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
  import {data} from '@/store/projects'
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        cards: data,
        cardsPerRow: 4
      };
    },
    computed: {
      rows() {
        let rows = [];
        for (let i = 0; i < this.cards.length; i += this.cardsPerRow) {
          rows.push(this.cards.slice(i, i + this.cardsPerRow));
        }
        return rows;
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    flex: 1 0 25%;
    max-width: 25%;
    /* padding: 1rem; */
  }
  
  @media (max-width: 992px) {
    .column {
      flex: 1 0 33.33%;
      max-width: 33.33%;
      
    }
  }
  @media (max-width: 768px) {
    .column {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }
  
  @media (max-width: 576px) {
    .column {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
  </style>
  