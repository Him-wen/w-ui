<template>
  <div class="w-input" :class="{'w-input_suffix': showsuffix}">
      <!--自己提供一个属性trantype来进行切换 -->
      <input 
      :type="showpassword ? (trantype ? 'text' : 'password') :type" 
      :name="name"
      class="w-input_inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      >
    <span class="w-input_suffix" v-if="showsuffix">
        <w-button type="primary" v-if="clearable">关闭</w-button>
        <w-button type="primary" v-if="showpassword" @click="handlepassword">隐藏</w-button>
    </span>
  </div>
</template>

<script>
export default {
    name:'WInput',
    props: {
      placeholder: {
          type: String,
          default: '请输入'
      },
      type: {
          type: String,
          default: ''
      },
      name: {
          type: String,
          default: ''
      },
      disabled: {
          type: Boolean,
          default: false,
      },
      value: {// 接受v-model传过来的值，就是内部实现的：value=“组件传给的值”
          type: String,
          default: ''
      },
      clearable: {
          type: Boolean,
          default: false
      },
      showpassword: {// 表示密码框
          type: Boolean,
          default: false
      }
    },
    data() {
        return {
            trantype:false
        }
    },
    computed: {
        showsuffix:function() {
            return this.clearable || this.showpassword;
        }
    },
    methods: {
        handleInput: function(e) {
            this.$emit('input', e.target.value)
        },
        handlepassword: function() {
            this.trantype = !this.trantype;
        }
    }
}
</script>

<style lang="scss">
.w-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .w-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .w-input_suffix{
    .w-input_inner{
      padding-right: 30px;
    }
    .w-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>