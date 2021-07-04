<template>
  <div id="app">
    <!-- <w-dialog title="温馨提示"></w-dialog> -->
    <!-- 赋值属性一定要记得加：当：和@调用回调函数一起用的时候，就可以用sync修饰符 -->
    <!-- <w-dialog width="50%" :visible.sync="visible">
      这里可以插入任何现实的内容
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:title>
        <h1>我是标题</h1>
      </template>
      <template v-slot:footer>
        <w-button type="primary" @click="visible = false">取消</w-button>
        <w-button type="primary" @click="visible = false">确定</w-button>
      </template>
    </w-dialog>
    <w-button type="primary" @click="visible = true">按钮</w-button> -->
    <w-input placeholder="请输入内容" name="username" type="password" disabled></w-input>
    <w-input placeholder="请输入内容" v-model="username"></w-input>
    <w-input placeholder="请输入内容" clearable></w-input>
    <w-input placeholder="请输入内容" showpassword></w-input>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      username:'zs',
    }
  },
  components: {
    
  },
  methods:{
  }
};
</script>

<style lang="scss">
.w-input{
  width: 180px;
}
</style>
