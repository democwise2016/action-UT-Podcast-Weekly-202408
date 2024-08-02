const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: '阿哲[哲週來尬電]',
    feedID: 'linzin-news2',
    thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC0oosHZ4k1o-zNT21gg5O7A',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0oosHZ4k1o-zNT21gg5O7A',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('[哲週來尬電') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '斐姨所思【阿姨想知道】',
    feedID: 'fanamericantime-interview',
    thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
    itemFilters: [
      ItemFiltersPreset.between10minTo60Min,
      (item) => { return (item.title.indexOf('斐姨所思【阿姨想知道】') > -1) },
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '淇食很科學',
    feedID: 'HiThisIsAchi',
    homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '叉雞說故事',
    feedID: 'bbqporkchicken',
    homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '異色檔案說故事',
    feedID: 'mystery2018',
    homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '動畫小坑谷',
    feedID: 'valleylife351',
    homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
    itemFilters: ItemFiltersPreset.between1minTo10Min,
  },
  {
    title: '井川一聊動畫',
    feedID: 'InokawaHajime',
    homepageURL: 'https://www.youtube.com/channel/UCcHVKeT_5Ta-gTa-sgooQxQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蒼藍鴿聊醫學',
    feedID: 'bluepigeon0810',
    homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '萊斯 新Game報',
    feedID: 'LiceMoo-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('《新Game報') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '大閒者 偷閒加油站',
    feedID: 'Idlers-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UCU6nhA37pbvzw-JXhAB87Mg',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('偷閒加油站') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '肥宅MS',
    feedID: 'otakumsvideo',
    homepageURL: 'https://www.youtube.com/channel/UCBOBS5RdHd2Owytoj4PqPqA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '四處觀察',
    feedID: 'sichuguancha',
    homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Emmy追劇時間 看財經',
    feedID: 'emmytw',
    homepageURL: 'https://www.youtube.com/channel/UCUkwvRrpvWkocNdk9qIpRSw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '好味營養師品瑄',
    feedID: 'dietitian_pink',
    homepageURL: 'https://www.youtube.com/channel/UCLwFOT4tHGaK9kqXXExhPFQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '瑩真律師',
    feedID: 'LawyerAngela',
    homepageURL: 'https://www.youtube.com/channel/UCLzWMcpNlhHo0c0yOyWksvQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '關鍵評論網：國際話題',
    feedID: 'TheNewsLens',
    homepageURL: 'https://www.youtube.com/channel/UC4bokYuSrVGpI6_WYv7Gdbw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('｜國際大風吹') > -1) || (item.title.indexOf('｜國際值日生') > -1)) }
    ]
  },
  // {
  //   title: '迷走大學 時事評論',
  //   feedID: 'meisouniv-news',
  //   homepageURL: 'https://www.youtube.com/channel/UCiCOKR_WkqZuYN9fpjWqnzg',
  //   itemFilters: [
  //     ItemFiltersPreset.between6minTo60Min,
  //     (item) => { return ((item.title.indexOf('【走漏消息') > -1) || (item.title.indexOf('【迷大Jo報】') > -1) || (item.title.indexOf('【這個不能講') > -1)) }
  //   ],
  //   options: {
  //     maxItems: 5
  //   }
  // },
  {
    title: '迷走大學 迷大Jo報',
    feedID: 'meisouniv-weekly-news',
    homepageURL: 'https://www.youtube.com/channel/UCiCOKR_WkqZuYN9fpjWqnzg',
    itemFilters: [
      ItemFiltersPreset.between30minTo180Min,
      (item) => { return (item.title.indexOf('【迷大Jo報】') > -1 || item.title.indexOf('【時事閒聊】') > -1 || item.title.indexOf('【走漏消息') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '我的學習筆記',
    feedID: 'mynotebooks',
    homepageURL: 'https://www.youtube.com/channel/UCAS8QqEyGGH71xYgFzNSbuw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '卡提諾狂新聞',
    feedID: 'CrazyNews9487',
    homepageURL: 'https://www.youtube.com/playlist?list=PLH2b4YnNI7j13eD1KdpEV3t7VEWtRQlYY',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Gamker攻壳官方频道',
    feedID: 'Gamker-YT',
    homepageURL: 'https://www.youtube.com/channel/UCLgGLSFMZQB8c0WGcwE49Gw',
    itemFilters: [
      ItemFiltersPreset.between6minTo60Min,
      (item) => { return ((item.title.indexOf('【就知道玩遊戲') > -1)) }
    ]
  },
  {
    title: '公視P#新聞實驗室',
    feedID: 'Ppsharp_newslab',
    homepageURL: 'https://www.youtube.com/channel/UCMDcOT4z7GS1SRGG2g7z43g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '玩家機密 每週新聞',
    feedID: 'GamerSecret-News',
    homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('【每週新聞】') >-1)) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: 'cheap講歷史',
    feedID: 'cheapaoe',
    homepageURL: 'https://www.youtube.com/channel/UCGGrblndNzi86WY5lJkQJiA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // {
  //   title: '黃國昌直播',
  //   feedID: 'KC-Huang-streams',
  //   homepageURL: 'https://www.youtube.com/channel/UCNWAsexY9eiS1N6JDns-0kw',
  //   itemFilters: [
  //     ItemFiltersPreset.between30minTo180Min,
  //     (item) => { return ((item.title.startsWith('【國昌直播'))) }
  //   ],
  //   options: {
  //     maxItems: 3
  //   }
  // },
  {
    title: '波特王好帥 粉紅特報',
    feedID: 'Realpotterking-Pinker',
    homepageURL: 'https://www.youtube.com/channel/UCsBP1dmKYfcorJ17kfOUTvg',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('粉紅特報') >-1)) }
    ],
  },
  {
    title: '小鄭在日本',
    feedID: 'realxiaozheng',
    homepageURL: 'https://www.youtube.com/channel/UCn2WdaugAANMkiXfUcCNdtA',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min
    ],
  },
  {
    title: '阿先說故事',
    feedID: 'AhFirst666',
    homepageURL: 'https://www.youtube.com/channel/UCz0V_SLhfJYhRQbVtyjNAOw',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min
    ],
  },
  {
    title: 'PanSci 泛科學',
    feedID: 'PanScitw',
    homepageURL: 'https://www.youtube.com/channel/UCuHHKbwC0TWjeqxbqdO-N_g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '我是RT',
    feedID: 'RTisme',
    homepageURL: 'https://www.youtube.com/channel/UCcG2HsNjnAbWOT6E1DRxjGA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Kuma桑',
    feedID: 'kumasan0720',
    homepageURL: 'https://www.youtube.com/channel/UC7S_3Gc5_vIpeFmgPG8DhNQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '狐狸牧場 foxranch',
    feedID: 'foxranch',
    homepageURL: 'https://www.youtube.com/channel/UCV4mpMSInbFxAIAGFk8e_JQ',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ],
  },
  {
    title: '35線上賞屋',
    feedID: '35visitchannel',
    homepageURL: 'https://www.youtube.com/channel/UCnWB4yjKnm6AeW-pj4E3dQw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'A Jie手遊快篩',
    feedID: 'AJieLive-mobile',
    homepageURL: 'https://www.youtube.com/channel/UCYKhjw4BT72a1DYDzbXeb_g',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('【手遊快篩】') >-1)) }
    ],
  },
  {
    title: 'Dio Chan聊遊戲',
    feedID: 'diochan1055',
    homepageURL: 'https://www.youtube.com/channel/UCAQmUESq4GxO1b_iBCrYlTA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '嚼豆 聊遊戲王',
    feedID: 'DOW2233',
    homepageURL: 'https://www.youtube.com/channel/UCerJk0-d22M7MFy8opOuyjA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       // (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
