// index.js
Page({
  data: {
    items3: ['通知公告', '通知公告', '通知公告', '通知公告'],
    selectedIndex: 0,  // 用于存储当前选中的公告索引
    items0: [
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item2.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      }
    ],
    items4: [
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item2.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知4',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      }
    ],
    items5: [
      {
        title: '关于加强新生入学后校园安全管理规范的通知5',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知5',
        author: '校园新闻网',
        img: '/imgs/item2.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知5',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      }
    ],
    items6: [
      {
        title: '关于加强新生入学后校园安全管理规范的通知6',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知6',
        author: '校园新闻网',
        img: '/imgs/item2.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知6',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      }
    ],
    items7: [
      {
        title: '关于加强新生入学后校园安全管理规范的通知7',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知7',
        author: '校园新闻网',
        img: '/imgs/item2.png'
      },
      {
        title: '关于加强新生入学后校园安全管理规范的通知7',
        author: '校园新闻网',
        img: '/imgs/item1.png'
      }
    ],
  },

  handleAdvertitleClick: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      items0: this.data['items' + (index + 4)],
      selectedIndex: index,
    });
  },



})
