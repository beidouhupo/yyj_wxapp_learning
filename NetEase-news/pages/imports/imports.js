// pages/imports/imports.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 1,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b173e2d2de86c43cc2dc6ba/news/get#!method=get',
      success: (res) => {
        // console.log(res);
        this.setData({
          isLoading: false,
          articleList: res.data.data.articles,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      }
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
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b173e2d2de86c43cc2dc6ba/news/get#!method=get',
      success: (res) => {
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1
        })
      }})
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    // let { currentPage, totalPages, isLoading } = this.data
    // console.log(currentPage, totalPages, isLoading);
    // if ( currentPage >= totalPages || isLoading) {
    //   return;
    // }
    // currentPage += 1
    // this.setData({
    //   isLoading: true
    // })
    // const url = `${API_BASE}/${currentPage}`;
    // wx.request({
    //   url: API_BASE,
    //   success: (res) => {
    //     const entities = [
    //       ...this.data.entities,
    //       ...res.data.data.articles
    //     ];
    //     this.setData({
    //       entities,
    //       isLoading: false,
    //       currentPage
    //     })
    //   }
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})