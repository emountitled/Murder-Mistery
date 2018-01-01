// pages/script_detail/script_detail.js
var scriptsData = require('../../data/scripts_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  choose_player: function(event){
    var script_id = event.currentTarget.dataset.script_id
    console.log("选择人物")
    wx.navigateTo({
      url: '/pages/choose_player/choose_player?id=' + script_id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var script_id = option.id;
    //console.log(script_id);
    this.data.currentScriptId = script_id
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