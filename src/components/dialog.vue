<template>
<!-- 整个对话框的遮罩 -->
<transition name="wtransition">
  <!-- 使用transition的话 就会出现遮罩层也是一样的抖动 -->
  <div class="w-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="w-dialog" :style="{width: width, marginTop: top}">
          <div class="w-dialog_header">
            <slot name="title">
              <!-- 具名插槽, slot被插入的地方 -->
              <span class="w-dialog_title">{{title}}</span>
            </slot>
              <button class="w-dialog_headerbtn" @click="handleClose">关闭</button>
          </div>
          <div class="w-dialog_body">
              <!-- <span>这是一段信息</span> 默认插槽 -->
              <slot />
          </div>
          <!-- v-if="$slots.footer"表示传了slot内容才显示dom块 -->
          <div class="w-dialog_footer" v-if="$slots.footer">
              <slot name="footer"></slot>
          </div>
      </div>
  </div>
</transition>
</template>

<script>
export default {
    name: 'WDialog',
    props: {
      title: {
        type: String,
        default: '默认'
      },
      width: {// 宽度
        type: String,
        default:'50%',
      },
      top: {// 高度
        type: String,
        default:'15vh',
      },
      visible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      handleClose: function() {
        console.log('哈哈');
        this.$emit('update:visible', false)// 这里的写法固定
      }
    }
}
</script>

<style lang="scss" scoped>
// scoped将当前组件的模版中的所有的元素都添加一个随机属性，所有的样式添加一个对应的属性选择器
// 原理就是组件库的样式覆盖不了的情况就可以用深度选择器 scss ::v-deep css>>> vue-loader里面
// css过渡的6个类别
// .w-dialog-enter{
//   opacity: 0;
// }
// .w-dialog-to{
//   opacity: 1;
// }
// .w-dialog-enter-active{
//   transform: all .5s;
// }
.wtransition-enter-active{
  animation: run 0.5s;
}
.wtransition-leave-active{
  animation: run .5s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
  transform: translateY(20%);
  }
  100% {
    opacity: 1;
  transform: translateY(0);
  }
}
.w-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .w-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .w-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .w-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .w-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .one-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
