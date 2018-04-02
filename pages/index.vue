<template>
  <div class="container">
    <nuxt-link to="/kitchensink">
      kitchensink
    </nuxt-link>
  </div>
</template>

<script>
  import Page from '~/components/layout/Page'
  import WooCommerce from 'woocommerce'
  export default {
    components: {
      Page
    }
  }
</script>