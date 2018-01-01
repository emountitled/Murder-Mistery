// pages/memery/memery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  clear_memery: function () {
    wx.showModal({
      title: '提示',
      content: '你将失去之前的所有记忆',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.setStorageSync("memery", [])
          wx.reLaunch({
            url: '/pages/memery/memery',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      memery: wx.getStorageSync("memery")
    })
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