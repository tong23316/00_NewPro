Page({
  data: {},
  logface: function () {
    wx.navigateTo({
      url: '/pages/log/logface/logface',
    });
  },
  logphone: function () {
    wx.navigateTo({
      url: '/pages/log/phone/phone',
    });
  },
});