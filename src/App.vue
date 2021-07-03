<template>
  <div id="app">
    <div class="row">
      <w-button type='primary' >按钮1</w-button>
      <w-button type='success' >按钮2</w-button>
    </div>
    <div class="row">
      <w-button plain type='primary' >按钮1</w-button>
      <w-button plain type='success' >按钮2</w-button>
    </div>
    <div class="row">
      <w-button round >按钮1</w-button>
      <w-button round >按钮2</w-button>
    </div>
    <div class="row">
      <w-button circle >拆</w-button>
      <w-button circle >拆</w-button>
    </div>
    <div class="row">
      <w-button @click="fn" >点击</w-button>
      <w-button @click="fn" >点击</w-button>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    fn: function() {
      console.log('123');
    }
  }
}
</script>

<style>

</style>
