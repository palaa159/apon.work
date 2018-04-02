<template>
  <div>
    <Header/>
    <!-- Content -->
    <main class="min-height-100vh">
      <nuxt/>
    </main>
    <!-- Curtain -->
    <fade-transition>
      <div 
        v-if="$store.state.purchase.isCartShowing"
        class="curtain _pst-asl _t-0px _l-0px _w-100pct _h-100pct _zid-0"
        @click="$store.commit('SET_CART_SHOW', false)"
      />
    </fade-transition>
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
