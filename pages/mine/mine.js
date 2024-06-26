
let recordStartX = 0, currentOffsetX = 0, curIndex = 0; //按下初始值，当前滑块初始值，当前滑块下标
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:'教职工请假申请',
        mobile:'工作部门:系统维护 请假申请人:xxx',
        imgSrc:'/imgs/messageimgs/clarm.png'
      },
      {
        id:2,
        name:'域名申请',
        mobile:'工作部门:系统维护 请假申请人:xxx',
        imgSrc:'/imgs/messageimgs/gerenxinxi1.png'
      },
      {
        id:3,
        name:'出国旅游申请',
        mobile:'工作部门:系统维护 请假申请人:xxx',
        imgSrc:'/imgs/messageimgs/internet.png'
      },
      {
        id:4,
        name:'教职工请假申请',
        mobile:'工作部门:系统维护 请假申请人:xxx',
        imgSrc:'/imgs/messageimgs/shenpi.png'
      }
    ],
    // curId:2,
    offsetNum:-134, //这是两个按钮的宽度
  },

  touchStart: function (e) { //触摸开始，记录初始值，并记录当前触摸的下标
    recordStartX = e.touches[0].clientX;
    curIndex = e.currentTarget.dataset.index;
    currentOffsetX = this.data.list[curIndex].offsetX;
  },
  touchMove: function (e) { //移动手指
    let list = this.data.list;
    let x = e.touches[0].clientX;
    let mx = recordStartX - x;
    let result = currentOffsetX - mx;
    if (result >= this.data.offsetNum && result <= 0) {
      list[curIndex].offsetX = result;
    }
    this.setData({
      list
    });
  },
  touchEnd: function (e) { //手指抬起来(触摸结束)
    let list = this.data.list;
    let item = list[curIndex];
    let halfOffset = this.data.offsetNum / 2; /*滑过一半就直接滑到终点，滑不到一半就再回去*/
    if (item.offsetX < halfOffset) { //这里要做判断，总不能滑一半扔那儿不管了吧
      item.offsetX = this.data.offsetNum;
    } else {
      item.offsetX = 0;
    }
    this.setData({
      list
    });
  },
  deleteItem: function (e) {//删除事件
    let index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list.splice(index, 1);
    this.setData({
      list: list
    });
  },
  settool: function () {
    wx.navigateTo({
      url: '/pages/settool/settool',
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
