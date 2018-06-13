//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLoading: true,
    topicList: [],
    currentPage: 1,
    totalPages: 1,
    total: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('loaded');
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b173e2d2de86c43cc2dc6ba/news/get2#!method=get',
      success: (res) => {
        console.log(res);
        this.setData({
          isLoading: false,
          topicList: res.data.data.topics,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {  
  }
})
