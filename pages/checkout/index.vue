<template>
  <div class="container">
    <div class="row _pdv-12px">
      <div class="col">
        <h4>ตรวจสอบรายการสินค้าและการจัดส่ง</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-8">
        <div class="_pdv-16px _pdh-16px _bgcl-white">
          <!-- รายการสินค้า -->
          <div class="bio-accordion -has-icon">
            <input 
              id="items" 
              type="checkbox" 
              class="_dp-n">
            <label 
              for="items" 
              class="_mg-0px"><h5 class="_pdh-4px">รายการสินค้า ({{ $store.state.purchase.items.length }})</h5></label>
            <div class="bio-accordion-content">
              <PurchaseItem 
                v-for="(item, i) in $store.state.purchase.items"
                :index="i"
                :key="i"
                :p-data="item"
              />
            </div>
          </div>
        </div>
        <div class="_pdv-16px _mgv-24px _pdh-16px _bgcl-white">
          <!-- ที่อยู่สำหรับจัดส่ง -->
          <div class="bio-accordion -has-icon">
            <input 
              id="delivery" 
              type="checkbox" 
              checked
              class="_dp-n">
            <label 
              for="delivery" 
              class="_mg-0px"><h5 class="_pdh-4px">ข้อมูลการจัดส่ง</h5></label>
            <div class="bio-accordion-content">
              <DeliveryAddress />  
            </div>
          </div>
        </div>
      </div>
      <!-- Summary -->
      <div class="col-12 col-sm-4">
        <div class="_pdv-16px _pdh-16px _bgcl-white">
          <h5>สรุปข้อมูลคำสั่งซื้อ</h5>
          <!-- <hr> -->
          <!-- ยอดรวม -->
          <div class="_dp-f _jtfct-spbtw _mgv-24px">
            <div class="_fs-5">ยอดรวม ({{ $store.state.purchase.items.length }} ชิ้น)</div>
            <div class="_fs-5">THB {{ totalPrice }}</div>
          </div>
          <!-- ค่าจัดส่ง -->
          <div class="_dp-f _jtfct-spbtw _mgv-24px">
            <div class="_fs-5">ค่าจัดส่ง</div>
            <div class="_fs-5">THB ฟรี</div>
          </div>
          <!-- คูปอง -->
          <div>
            <div class="bio-field _dp-f">
              <div class="bio-input _f-7 _mgr-8px">
                <input 
                  type="text"
                  class="_h-48px" 
                  placeholder="ใส่ส่วนลด ถ้ามี"
                >
              </div>
              <button class="bio-button _f-2">ยืนยีน</button>
              <!-- <small>Great!, awesome name!</small> -->
            </div>  
          </div>
          <!-- ยอดรวมทั้งสิ้น -->
          <div class="_dp-f _jtfct-spbtw _mgt-24px">
            <div class="_fs-5">ยอดรวมทั้งสิ้น</div>
            <div class="_fs-5 _fw-700 _cl-accent">THB {{ totalPrice }}</div>
          </div>
          <div class="_tal-r">
            <small>รวมภาษีมูลค่าเพิ่ม (ถ้ามี)
            </small>
          </div>
          <!-- ชำระเงิน -->
          <button class="bio-button _h-48px _mgt-24px _w-100pct">ดำเนินการชำระเงิน</button>
          <!-- เข้าสู่ระบบ -->
          <nuxt-link to="login?redirect=checkout">
            <button class="bio-button _h-48px _mgt-12px -outline -info _w-100pct">เข้าสู่ระบบ</button>
          </nuxt-link> 
        </div>
      </div>
    </div>
    <!-- รายการสินค้า -->
    <!-- ข้อมูลการจัดส่ง -->
    <!-- ตำแหน่งและวิธีการจัดส่ง -->
    <!-- ส่วนลด/ชำระเงิน -->
  </div>
</template>

<script>
  import PurchaseItem from '~/components/purchase/PurchaseItem'
  import DeliveryAddress from '~/components/forms/DeliveryAddress'
  export default {
    components: {
      PurchaseItem,
      DeliveryAddress
    },
    fetch ({ store, redirect }) {
      // Check if valid
      if (store.state.purchase.items.length) {
        return true
      }
      return redirect('/')
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
    watch: {
      '$store.state.purchase.items' () {
        if (!this.$store.state.purchase.items.length) {
          this.$router.replace({ path: '/' })
        }
      }
    }
  }
</script>
