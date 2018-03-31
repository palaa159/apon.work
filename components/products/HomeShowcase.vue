<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Image container -->
        <div>
          <!-- Image -->
          <div 
            v-lazy:background-image="image" 
            class="image _ratio" 
          />
          <!-- Button -->
          <button>
            Click
          </button>
        </div>
      </div>
      <div class="col">
        y
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: 'http://via.placeholder.com/350x350'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    height: 300px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
