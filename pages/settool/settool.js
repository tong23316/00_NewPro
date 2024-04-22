Page({
  data: {},
  navigateToTargetPage: function () {
    // wx.navigateTo({
    //   url: '/pages/mine/mine',
    // });
    wx.navigateBack();
  },
  login: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    });
  },
});