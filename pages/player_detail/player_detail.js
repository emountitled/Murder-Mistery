var scriptsData = require('../../data/scripts_data.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  start: function(){
    wx.reLaunch({
      url:"/pages/tutorial/tutorial"
    })
  },
  onLoad: function (options) {
    var player_id = wx.getStorageSync("player_id")
    //console.log("g_script_id " + app.g_script_id)
    //console.log("Info " + player_id)
    var player_data = scriptsData.scriptList[wx.getStorageSync("script_id")].players[player_id]
    this.setData({
      playerData: player_data
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