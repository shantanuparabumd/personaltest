<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <div class="contact-info">
      <div class="contact-item">
        <font-awesome-icon :icon="['fas', 'fa-envelope']"/>
        <p>email@example.com</p>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fab', 'fa-github']"/>
        <p><a href="https://github.com/example">github.com/example</a></p>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fas', 'fa-phone']"/>
        <p>(555) 555-5555</p>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fas', 'fa-location-dot']"/>
        <p>123 Main St, Anytown USA 12345</p>
      </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
.contact-container {
  text-align: center;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.contact-item {
  width: 250px;
  margin: 20px;
  text-align: left;
}

.contact-item i {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-item p {
  font-size: 16px;
  margin-bottom: 0;
}
</style>
