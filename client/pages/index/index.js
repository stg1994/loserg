// index.js 
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js') 
var app = getApp()
Page({

  /**
     * 页面的初始数据
     */
  data: {
    snowData: {
      snowText: '第一场雪',
      snowtext: '第一场雪',
      snowpic: 'http://d.5857.com/ttc_171206/001.jpg',
    },
    meetData: {
      meetText: '遇见你',
      meettext: '2018年，遇见你',
      meetpic: 'http://d.5857.com/ttc_171206/002.jpg',
    },
    believeData: {
      believeText: '相信爱',
      believetext: '遇见你，相信爱',
      believepic: 'http://d.5857.com/ttc_171206/004.jpg',
    },
    snowText: '第一场雪',
    snowtext: '第一场雪',
    snowpic: 'http://d.5857.com/ttc_171206/001.jpg',
    meetText: '遇见你',
    meettext: '2018年，遇见你',
    meetpic: 'http://d.5857.com/ttc_171206/002.jpg',
    believeText: '相信爱',
    believetext: '遇见你，相信爱',
    believepic: 'http://d.5857.com/ttc_171206/004.jpg',
    join: 'Join In',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /*
  *启动进入主页
  */
  intoActivity: function (event) {
    wx.navigateTo({
      url: '../music/music',
      success: function (res) {
        console.log('跳转到music页面成功')// success
      },
      fail: function () {
        console.log('跳转到music页面失败')  // fail 
      }
    })
  },

  /*
  *启动进入主页
  */
  intoActivity1: function () {
    wx.navigateTo({
      url: '../girl/girl',
      success: function (res) {
        console.log('跳转到girl页面成功')// success
      },
      fail: function () {
        console.log('跳转到girl页面失败')  // fail 
      }
    })
  },

  /*
  *启动进入主页
  */
  intoActivity2: function () {
    wx.navigateTo({
      url: '../video/video',
      success: function (res) {
        console.log('跳转到video页面成功')// success
      },
      fail: function () {
        console.log('跳转到video页面失败')  // fail 
      }
    })
  },


  /*
  *启动进入主页
  */
  intoActivity3: function (event) {
    wx.navigateTo({
      url: '../activity/activity?snowData=' + JSON.stringify(this.data.snowData),
      success: function (res) {
        console.log('跳转到Activity页面成功')// success
      },
      fail: function () {
        console.log('跳转到Activity页面失败')  // fail 
      }
    })
  },

})