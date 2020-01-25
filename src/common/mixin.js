import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50)

    // 2.对监听事件进行保存
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener)
      // console.log('混入');

  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backclick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}