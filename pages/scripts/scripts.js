// pages/scripts/scripts.js
var scriptData = require('../../data/scripts_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  enter_detail: function(event){
    var script_id = event.currentTarget.dataset.script_id
    console.log("选择的script_id为：" + script_id)
    wx.navigateTo({
      url: '/pages/script_detail/script_detail?id=' + script_id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scriptList:scriptData.scriptList
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