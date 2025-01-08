const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  // {
  //   title: '玩家機密 每週新聞',
  //   feedID: 'GamerSecret-News',
  //   homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
  //   itemFilters: [
  //     ItemFiltersPreset.between3minTo30Min,
  //     (item) => { return ((item.title.indexOf('【每週新聞】') >-1)) }
  //   ],
  //   options: {
  //     maxItems: 3
  //   }
  // },
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
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('粉紅特報') >-1)) }
    ],
  },
  {
    title: '小鄭在日本',
    feedID: 'realxiaozheng',
    homepageURL: 'https://www.youtube.com/channel/UCn2WdaugAANMkiXfUcCNdtA',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min
    ],
  },
  {
    title: '阿先說故事',
    feedID: 'AhFirst666',
    homepageURL: 'https://www.youtube.com/channel/UCz0V_SLhfJYhRQbVtyjNAOw',
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
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ],
  },
  {
    title: '赤狐與毛',
    feedID: 'Fox_Wing',
    homepageURL: 'https://www.youtube.com/channel/UCuPeD_7PYCBf9IBb__1m5Ng',
    itemFilters: [
      ItemFiltersPreset.between10minTo60Min,
    ],
  },
  {
    title: '真觀點 談政治',
    feedID: 'zhenguandian',
    homepageURL: 'https://www.youtube.com/channel/UCAwVpzgGI9sEu4O4ZlB5ZWQ',
    itemFilters: [
      ItemFiltersPreset.between10minTo60Min,
    ],
  },
  // {
  //   title: '35線上賞屋',
  //   feedID: '35visitchannel',
  //   homepageURL: 'https://www.youtube.com/channel/UCnWB4yjKnm6AeW-pj4E3dQw',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  // {
  //   title: 'A Jie手遊快篩',
  //   feedID: 'AJieLive-mobile',
  //   homepageURL: 'https://www.youtube.com/channel/UCYKhjw4BT72a1DYDzbXeb_g',
  //   itemFilters: [
  //     ItemFiltersPreset.between3minTo30Min,
  //     (item) => { return ((item.title.indexOf('【手遊快篩】') >-1)) }
  //   ],
  // },
  // {
  //   title: 'Dio Chan聊遊戲',
  //   feedID: 'diochan1055',
  //   homepageURL: 'https://www.youtube.com/channel/UCAQmUESq4GxO1b_iBCrYlTA',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  // {
  //   title: '嚼豆 聊遊戲王',
  //   feedID: 'DOW2233',
  //   homepageURL: 'https://www.youtube.com/channel/UCerJk0-d22M7MFy8opOuyjA',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  {
    title: 'Sky game 電玩買蝦款',
    feedID: 'Sky_game-weekly',
    homepageURL: 'https://www.youtube.com/channel/UC4D6eg7KWWiXNJVTXtuyZfA',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('電玩買蝦款') >-1)) }
    ],
  },
  {
    title: '苗博雅 臺北百科全書精華',
    feedID: 'miaopoya-taipei-encyclopedia',
    homepageURL: 'https://www.youtube.com/@miaopoya/videos',
    itemFilters: [
      (item) => { return ((item.title.indexOf('臺北百科全書精華') >-1)) },
      ItemFiltersPreset.between3minTo30Min,
    ],
  },
  {
    title: 'IT咖啡馆: GitHub軟體介紹',
    feedID: 'it-coffee-github',
    homepageURL: 'https://www.youtube.com/@it-coffee',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ],
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
