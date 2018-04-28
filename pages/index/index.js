//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.downloadFile({
      // url: 'https://raw.githubusercontent.com/Onesimu/blog/master/index.pdf',
      // url:'https://gitee.com/Onesimu/blog/raw/master/index.pdf',
      url:'https://tj-cabbage-yun-ftn.weiyun.com/ftn_handler/0a6d6ed46a8549e0e5ecb37d0b23dc904fa1c2f36f396e478e52cf8c23c65c877a632c61a90c147204ace59fb47ae4dc19918c3b7d3aef978cdc47ba4cb8a7ad/index.pdf?fname=index.pdf&from=30113&version=2.0.0.2&uin=10000',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '田伟个人简历',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
