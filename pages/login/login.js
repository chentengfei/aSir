const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    if (!e.detail.value.email || !e.detail.value.pw){
      wx.showToast({
        title: '请输入账号和密码',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.request({
      url: app.globalData.url.login,
      data: e.detail.value,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:'POST',
      success(res) {
        console.log(res)
        if(res.data.code=='0'){
          wx.redirectTo({
            url: '/pages/index/index'
          })
        }else{
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  }
})