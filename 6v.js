var rule = {
    title: '新6V',
    host: 'https://www.xb6v.com',
    // 通用路徑規則
    url: '/fyclass/index_fypage.html',
    searchUrl: '/e/search/index.php',
    searchable: 1,
    quickSearch: 1,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    // 自訂頂部分類選單與網址代碼
    class_name: '最新50部$喜剧片$动作片$爱情片$科幻片$恐怖片$剧情片$战争片$纪录片$动画片$电视剧$综艺',
    class_url: 'qian50m.html$xijupian$dongzuopian$aiqingpian$kehuanpian$kongbupian$juqingpian$zhanzhengpian$jilupian$donghuapian$dianshiju$zongyi',
    play_parse: true,
    lazy: '',
    limit: 6,
    recommend: '.bd3L .box',
    // 列表解析
    一级: '.bd3L .box ul li;a;img;a;a',
    // 處理第一頁：如果是 qian50m.html 就直接存取，如果是一般目錄（如 xijupian）就把 index_1.html 轉成 /
    pagecount: {
        '1': ''
    },
    二级: {
        title: '.info_left h1;text',
        img: '.info_right img;src',
        desc: '.info_left p:eq(0);text',
        content: '#text;text',
        tabs: '#option1',
        lists: '#main1:eq(#id) a'
    },
    搜索: 'form;*;*;*;*'
}
