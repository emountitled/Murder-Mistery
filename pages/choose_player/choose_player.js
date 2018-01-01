var scriptsData = require('../../data/scripts_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  player_detail:function(event){
    var script_id = event.currentTarget.dataset.script_id
    var player_id = event.currentTarget.dataset.player_id
    wx.setStorageSync("script_id", script_id)
    wx.setStorageSync("player_id", player_id)
    wx.setStorageSync("memery", [])
    console.log("当前script_id " + script_id)
    console.log("当前player_id " + player_id)
    wx.reLaunch({
      url: '/pages/player_detail/player_detail',
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var script_id = options.id;
    var script_data = scriptsData.scriptList[script_id]
    this.setData({
      scriptData: script_data
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