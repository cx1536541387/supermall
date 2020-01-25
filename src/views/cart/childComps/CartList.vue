<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-item v-for="(item,index) in cartList" 
                      :product="item" 
                      :key="item.id"
                      :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartItem from './CartItem'
import {mapGetters} from 'vuex'

export default {
  name:'CartList',
  components:{
    Scroll,
    CartItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }

  .content{
    height: 100%;
    overflow: hidden;
  }
</style>