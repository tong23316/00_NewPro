// pages/log/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToHomePage: function() {
    wx.switchTab({
      url: '/pages/index/index' // 这里的路径需要替换为你的主页路径
    });
  }
 })