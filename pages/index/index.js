const app = getApp();
Page({
  data: {
    PageCur: 'basics',
    zlist: [{
      title: '索引列表',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: '/indexes/indexes'
    },
      {
        title: '微动画',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/animation/animation'
      },
      {
        title: '全屏抽屉',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '垂直导航',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }],
    dlist: [{
      title: '西安市雁塔区一号楼',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: '/indexes/indexes',
      state: 0,
      lud: 240
    },
      {
        title: '西安市雁塔区二号楼',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        state: 1,
        lud: 240
      },
      {
        title: '西安市雁塔区三号楼',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        state: 0,
        lud: 240
      },
      {
        title: '西安市雁塔区四号楼',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        state: 1,
        lud: 240
      }],
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '智能小开关',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
  onLoad: options=> {
    wx.request({
      url: app.globalData.url.dlist,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success(res) {
        console.log(res)
        if (res.data.code == '0') {
          this.setData({
            zlist: res.data.info
          })
        } else {
          wx.showToast({
            title: '初始化数据失败',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })

    wx.request({
      url: app.globalData.url.dlist,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success(res) {
        console.log(res)
        if (res.data.code == '0') {
          this.setData({
            dlist: res.data.info
          })
        } else {
          wx.showToast({
            title: '初始化数据失败',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },
})