<template>
  <button class="w-button" :class="[`w-button--${type}`,{
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
    }]"
    @click="handleClick"
  >
      <span><slot></slot></span>
    </button>
</template>

<script>
/**
 * 组件通信，组件插槽，组件Props校验
 * 通信：在组件里面使用button组件，就需要传值
 */
export default {
    name:'WButton',
    props: {
        type: {// 类型的一个校验
            type: String,
            default: 'default',
        },
        plain: {
            type: Boolean,// 传了此值则为true
            default: false,// 默认为false
        },
        round: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        }
    },
    created() {
        console.log(this.type);
    },
    methods: {
        handleClick: function(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style>
.w-button{
    /* background-color: aqua; */
    margin-left: 20px;
}
.w-button--primary{
    background-color: rgb(173, 173, 223);
    
}
.w-button--success{
    background-color:red;
}
.is-plain{
    background-color: sienna;
}
.is-round{
    border-radius: 20px;
}
.is-circle{
    border-radius: 50%;
}
</style>