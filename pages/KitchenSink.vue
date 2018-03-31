<template>
  <div class="container">
    <h1>Component Kitchensink</h1>
    <div style="width: 600px;">
      <HomeShowcase />
    </div>
  </div>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  export default {
    components: {
      HomeShowcase
    }
  }
</script>