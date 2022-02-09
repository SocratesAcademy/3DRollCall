/* 背景音乐数据，属性包括name和url，
*  name填要显示出来的名字；url填歌曲文件名（包括后缀名）
*  建议复制第一行加在最前面进行修改，注意逗号,
*  最后一个{ }后面不要有逗号,属性的值要用引号括起来
*/
var musicData =[
  { name: '恋愛サーキュレーション', url: 'love_loop.mp3'},
  { name: 'Ifの世界設定', url: 'If.mp3'},
  { name: 'LOL登录曲', url: 'LOL.mp3'}
];

/* 学生数据用英文逗号隔开
*  末尾不要有逗号,首尾 `号不能掉
*  ps：可以使用word替换功能对数据格式化
*↓↓↓↓↓学生数据↓↓↓↓↓*/
var stuData = `
陈晨昱,
陈俊沂,
陈琪雯,
洪梓栋,
黄捷,
李思恬,
廖欣航,
潘筱楠,
孙广哲,
王亦千,
魏铱遥,
吴昊明,
薛敬文,
常誉中,
范宏瑞,
税戈洋,
王晓萱,
张弛,
林凌,
史书晓
`;

//获取信息函数，请勿修改
function getData(type) {
  var stu = stuData.replace(/\r*\n*\t*\s/g,'').split(',');
  return type==0 ? musicData : stu;
}
