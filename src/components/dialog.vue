<template>
  <div class="w-dialog_wrapper">
      <div class="w-dialog">
          <div class="w-dialog_header">
              <span class="w-dialog_title">{{title}}</span>
              <button class="w-dialog_headerbtn">关闭</button>
          </div>
          <div class="w-dialog_body">
              <span>这是一段信息</span>
          </div>
          <div class="w-dialog_footer">
              <w-button>取消</w-button>
              <w-button type="primary">确定</w-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WDialog',
    props: {
      title: {
        type: String,
        default: '默认'
      }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
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
