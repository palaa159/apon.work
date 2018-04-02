<template>
  <header>
    <!-- Cart -->
    <div class="_pdv-12px _bgcl-neutral-300 _pst-rlt _zid-1">
      <div class="container">
        <div class="_dp-f _jtfct-spbtw">
          <div>
            Name
          </div>
          <!-- Shopping cart with badge -->
          <Cart />
        </div>
      </div>
    </div>
    <div class="_pdv-16px">
      <div class="container">
        <nav>
          nav
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import Cart from '~/components/purchase/Cart'
  export default {
    components: {
      Cart
    }
  }
</script>