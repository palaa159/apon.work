<template>
  <div class="_dp-f _mgv-24px">
    <!-- Image -->
    <div 
      v-lazy:background-image="pData.image"
      class="image _f-3 _ratio" 
    />
    <!-- Detail -->
    <div class="_mgl-12px _dp-f _f-8 _fdrt-cl _jtfct-spbtw _pdv-4px _pdv-8px-sm _pdh-2px _pdh-12px-sm">
      <h6 
        class="_lh-100pct _mgbt-4px" 
        v-html="`${index + 1}. ${pData.title}`" />
      <!-- Amount -->
      <div class="_w-100pct">
        <AmountCalc
          :amount="pData.amount" 
          :price="pData.price"
          @adjust-item="onAdjust"
        />
      </div>
    </div>
    <!-- Remove -->
    <div 
      class="_mgh-2px _mgv-4px _f-1 _cl-accent-300 _tal-ct _cs-pt" 
      @click="$store.commit('REMOVE_PROD', pData.id)">
      <font-awesome-icon 
        icon="times" 
        size="lg"/>
    </div>
  </div>
</template>

<script>
  import AmountCalc from '~/components/purchase/AmountCalc'
  export default {
    components: {
      AmountCalc
    },
    props: {
      index: {
        type: Number,
        default: 1
      },
      pData: {
        type: Object,
        default: () => ({
          id: 1,
          title: 'เครื่องตรวจระดับนำตาลในเลือก SD CHECK GOLD',
          price: 12000,
          image: 'http://via.placeholder.com/350x350',
          amount: 1
        })
      }
    },
    methods: {
      onAdjust (n) {
        console.log(`on adjust: ${n}`)
        this.$store.commit('SET_PROD_CART_AMT', { 
          id: this.pData.id,
          amount: this.pData.amount + n
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 30%;
    min-width: 100px;
    max-width: 150px;
    // height: 300px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
