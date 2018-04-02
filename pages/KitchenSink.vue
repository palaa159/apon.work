<template>
  <Page>
    <h1>Component Kitchensink</h1>
    <div style="width: 600px;">
      <HomeShowcase
        :left-image="false"
      />
    </div>
  </Page>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  import Page from '~/components/layout/Page'
  export default {
    components: {
      Page,
      HomeShowcase
    }
  }
</script>