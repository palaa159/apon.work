<template>
  <div>
    <Header/>
    <!-- Content -->
    <main>
      <nuxt/>
    </main>
    <!-- Curtain -->
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/styles/variables';
  .min-height-100vh {
    min-height: calc(100vh - 100px);
    background: rgba(0, 0, 0, 0.02);
  }
  .curtain {
    @include breakpoint(mobile) {
      background: #fff;
    }
    background: rgba(0, 0, 0, 0.75);
  }
</style>
