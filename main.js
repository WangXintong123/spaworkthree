var data = [
  ['语言名称', '排名', '升或降', '变化幅度'],
  ['Java', 1, '降', '-0.01%'],
  ['C', 2, '升','+2.24%' ],
  ['Python', 3,'升' , '-2.58%'],
  ['C++', 4, '降', '+2.07%'],
  ['C#', 5,'升' , '-1.17%'],
  ['Visual Basic .NET', 6,'降' ,'-0.85%' ],
  ['JavaScript', 7,'降' ,'-0.28%']
];

var container = document.getElementById('excel');
var hot = new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: true,
  filters: true,
  dropdownMenu: true,
  colWidths: [180,150,150,170],
  rowHeights: [30,30,30,30,30,30,30,30]    
});


var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {},
    legend: {
        data:['排名']
    },
    xAxis: {
        data: ["2020","2005","2010","2015","2020"]
    },
    yAxis: {
        // data: ["0","2","4","6","8","10"]
    },
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);