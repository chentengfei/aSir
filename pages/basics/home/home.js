const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
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