const app = getApp();
Component({
  properties:{
    'show': {
      type: JSON,
      value: '',
      observer: function (newVal, oldVal) {
        this.setData({
          list: newVal
        })
        console.log(this.properties);
      }
    },
  },
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: []
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        // url: '/pages/plugin' + e.currentTarget.dataset.url
      })
    },
  }
});