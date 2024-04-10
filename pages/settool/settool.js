Page({
  data: {},
  navigateToTargetPage: function () {
    wx.navigateTo({
      url: '/pages/mine/mine',
    });
  },
  login: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    });
  },
});