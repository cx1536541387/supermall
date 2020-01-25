export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 2.判断oldproduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('当前商品添加成功')
      } else {
        payload.count = 1
          // context.state.carList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加了新的商品')
      }
    })
  }
}