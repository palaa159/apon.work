<template>
  <no-ssr>
    <div class="_mgv-32px container">
      <div class="row">
        <!-- ชื่อ -->
        <div class="col-12 col-sm-6">
          <float-label>
            <input 
              type="email" 
              placeholder="อีเมล">
          </float-label>
          <float-label>
            <input 
              type="text" 
              placeholder="ชื่อ - สกุล">
          </float-label>
          <float-label>
            <input 
              type="text" 
              placeholder="หมายเลขโทรศัพท์">
          </float-label>
          <float-label>
            <input 
              type="text" 
              placeholder="เลขประจำตัวผู้เสียภาษี">
          </float-label>
          <float-label>
            <input 
              type="text" 
              placeholder="รหัสสาขา">
          </float-label>
        </div>
        <!-- ที่อยู่ -->
        <div class="col-12 col-sm-6 _mgt-32px _mgt-0px-sm">
          <float-label>
            <input 
              type="text" 
              placeholder="ที่อยู่">
          </float-label>
          <float-label
            label="รหัสไปรษณีย์">
            <thai-address-input 
              v-model="postalCode"
              placeholder="เลือกรหัสไปรษณีย์"
              type="postalCode"
              input-class="thai-addr"
              @selected="onSelected"/>
          </float-label>
          <float-label
            label="จังหวัด">
            <thai-address-input
              v-model="province"
              placeholder="เลือกจังหวัด"
              type="province"
              input-class="thai-addr"
              @selected="onSelected"/>
          </float-label>
          <float-label
            label="อำเภอ/เขต">
            <thai-address-input 
              v-model="district"
              placeholder="เลือกอำเภอ/เขต"
              type="district"
              input-class="thai-addr"
              @selected="onSelected"/>
          </float-label>
          <float-label
            label="แขวง/ตำบล">
            <thai-address-input 
              v-model="subdistrict"
              placeholder="เลือกแขวง/ตำบล"
              type="subdistrict"
              input-class="thai-addr"
              @selected="onSelected"/>
          </float-label>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
  export default {
    data: () => ({
      subdistrict: '',
      district: '',
      province: '',
      postalCode: '',
    }),
    methods: {
      onSelected(address) {
        this.subdistrict = address.subdistrict;
        this.district = address.district;
        this.province = address.province;
        this.postalCode = address.postalCode;
      },
    }
  }
</script>