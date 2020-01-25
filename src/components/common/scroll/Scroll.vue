<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    // 1.创建better scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    // 2.监听滚动位置
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position)=>{
      //console.log(position);
      this.$emit('scroll',position)
    })
    }

    // 3.监听上拉事件
    if(this.pullUpLoad){
      this.scroll.on("pullingUp",()=>{
      // 上拉加载更多
      //console.log('123');
      this.$emit('pullingUp')
    })
    }
  },
  methods:{
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,500)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      //console.log('---');
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>