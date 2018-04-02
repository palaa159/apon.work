<template>
  <main>
    <!-- Breadcrumb -->
    <div class="container">
      {{ $route.path }}
      <!-- xxx -->
    </div>
    <div class="container _pdv-32px">
      <slot />
    </div>
  </main>
</template>

<script>
  export default {
    created () {
      // console.log(this.$route)
    }
  }
</script>