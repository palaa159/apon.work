<template>
  <div>
    <!-- Cart Slide-in -->
    <slide-x-right-transition>
      <div 
        v-show="$store.state.purchase.isCartShowing"
        class="cart-panel-container _ovfy-hd _pst-asl _t-48px _r-0px _w-100pct _w-40pct-sm _bgcl-white _zid-1"> 
        <div class="cart-panel _dp-f _fdrt-cl">
          <!-- Main -->
          <div 
            :class="{'_alit-ct': !$store.state.purchase.items.length}"
            class="_f-9 _dp-f _jtfct-ct _ovfy-sc" 
          >
            <div 
              v-if="!$store.state.purchase.items.length"
              class="_tal-ct" 
            >
              <font-awesome-icon 
                :icon="['far', 'frown']"
                size="6x"
              />
              <p class="_tal-ct _mgt-12px">
                ยังไม่มีสินค้าในตะกร้า
              </p>
            </div>
            <!-- If have item -->
            <div 
              v-else
              class="container _w-100pct" 
            >
              <!-- Purchase Item -->
              <PurchaseItem 
                v-for="(item, i) in $store.state.purchase.items"
                :index="i"
                :key="i"
                :p-data="item"
              />
            </div>
          </div>
          <!-- Bottom -->
          <div class="_f-2 summary _dp-f _alit-ct _jtfct-ct _bgcl-white">
            <div class="container">
              <!-- If no item -->
              <button
                v-if="!$store.state.purchase.items.length" 
                class="bio-button -dark -outline _mgh-at"
                @click="$store.commit('SET_CART_SHOW', !$store.state.purchase.isCartShowing)" 
              >
                เลือกซื้อของต่อ
              </button>
              <!-- If has item -->
              <div 
                v-else
                class="_dp-f _jtfct-spbtw _alit-ct" 
              >
                <!-- Total -->
                <div>
                  <p class="_lh-100pct">
                    สินค้า {{ $store.state.purchase.items.length }} รายการ<br>รวมเป็นเงิน
                  </p>
                  <h4 class="_cl-dark _lh-100pct">
                    THB {{ totalPrice }}
                  </h4>
                </div>
                <!-- Pay -->
                <div>
                  <button 
                    class="bio-button -dark" 
                    @click="proceed()">
                    <h6>ดำเนินการชำระเงิน</h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide-x-right-transition>
    <!-- Cart Button -->
    <div
      class="_dp-f _alit-ct _cs-pt" 
      @click="$store.commit('SET_CART_SHOW', !$store.state.purchase.isCartShowing)">
      <font-awesome-icon 
        class="_mgr-8px"
        icon="shopping-cart" 
        size="lg"/>
      <!-- Badge -->
      <Badge 
        :number="$store.state.purchase.items.length"
      />
    </div>
  </div>
</template>

<script>
  import Badge from '~/components/extras/Badge'
  import PurchaseItem from '~/components/purchase/PurchaseItem'
  export default {
    components: {
      Badge,
      PurchaseItem,
    },
    computed: {
      totalPrice () {
        const reducer = (a, c) => a + c
        if (!this.$store.state.purchase.items.length) return 0
        return this.$store.state.purchase.items
          .map(x => x = x.price * x.amount)
          .reduce(reducer)
          .toLocaleString()
      }
    },
    methods: {
      proceed () {
        this.$store.commit('SET_CART_SHOW', false)
        this.$router.replace({ path: '/checkout' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-panel-container {
    box-shadow: -1px 0px 40px -10px rgba(0, 0, 0, 0.1);
  }
  .cart-panel {
    height: calc(100vh - 48px);
  }
  .summary {
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
    min-height: 72px;
  }
</style>
