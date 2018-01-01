var script_data = require('../../data/scripts_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    memery: []
  },

  get_clue: function(event){
    var clue_type = event.currentTarget.dataset.clue_type
    var clue_id = event.currentTarget.dataset.clue_id
    var clue_info = event.currentTarget.dataset.clue_info
    var temp = wx.getStorageSync("memery")
    temp.push({
      "clue_type": clue_type,
      "clue_info": clue_info 
    })
    wx.setStorageSync("memery", temp)
    wx.reLaunch({
      url: '/pages/memery/memery',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var script_id = wx.getStorageSync("script_id")
    var player_id = wx.getStorageSync("player_id")
    console.log("ww" + script_id)
    console.log("tt" + player_id)
    this.setData({
      script_id:script_id,
      player_id:player_id,
      clueData:script_data.scriptList[script_id].clues
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 
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