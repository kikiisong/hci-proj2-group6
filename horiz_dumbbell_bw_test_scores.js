am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv21");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panY",
  wheelY: "zoomY"
}));

chart.get("colors").set("step", 3);


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yRenderer = am5xy.AxisRendererY.new(root, {
  minGridDistance: 30
});

var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "category",
  renderer: yRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererX.new(root, {})
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  baseAxis: yAxis,
  valueXField: "close",
  openValueXField: "open",
  categoryYField: "category",
  tooltip: am5.Tooltip.new(root, {
    labelText: "Black: {openValueX}; White: {valueX}"
  })
}));

series.columns.template.setAll({
  height: 0.5
});

series.bullets.push(function() {
  return am5.Bullet.new(root, {
    locationX: 0,
    sprite: am5.Circle.new(root, {
      radius: 5,
      fill: series.get("fill")
    })
  })
})

var nextColor = chart.get("colors").getIndex(3);

series.bullets.push(function() {
  return am5.Bullet.new(root, {
    locationX: 1,
    sprite: am5.Circle.new(root, {
      radius: 5,
      fill: nextColor
    })
  })
})

// Set data
// var data = [];
// var open = 100;
// var close = 120;

var data = [{
  category: "Worcester",
  open: -0.34,
  close: 2.41
}, {
  category: "Wicomico",
  open: -1.58,
  close: 0.93
}, {
  category: "Washington",
  open: -1.28,
  close: 0.63
}, {
  category: "Talbot",
  open: -1.92,
  close: 0.82
}, {
  category: "Somerset",
  open: -1.21,
  close: 1.28
}, {
  category: "St. Mary's",
  open: -1.12,
  close: 0.32
}, {
  category: "Queen Anne's",
  open: -1.04,
  close: 1.28
}, {
  category: "Prince George's",
  open: -1.12,
  close: 0.95
}, {
  category: "Montgomery",
  open: -0.5,
  close: 2.62
}, {
  category: "Kent",
  open: -2.2,
  close: 0.36
}, {
  category: "Howard",
  open: -0.23,
  close: 2.4
}, {
  category: "Harford",
  open: -0.71,
  close: 1.51
}, {
  category: "Garrett",
  open: -0.04,
  close: 0.2
}, {
  category: "Frederick",
  open: -0.58,
  close: 1.45
}, {
  category: "Dorchester",
  open: -2.27,
  close: 0.27
}, {
  category: "Charles",
  open: -0.73,
  close: 1.26
}, {
  category: "Cecil",
  open: -1.56,
  close: 0.14
}, {
  category: "Carroll",
  open: -0.24,
  close: 1.44
}, {
  category: "Caroline",
  open: -1.07,
  close: 0.86
}, {
  category: "Calvert",
  open: -0.42,
  close: 1.61
}, {
  category: "Baltimore County",
  open: -0.96,
  close: 1.22
}, {
  category: "Baltimore City",
  open: -2.15,
  close: 0.11
}, {
  category: "Anne Arundel",
  open: -0.78,
  close: 1.7
}, {
  category: "Allegany",
  open: -0.91,
  close: 0.31
}];

// ,
//   "Demarcus",
//   "Carlo",
//   "Jacinda",
//   "Richie",
//   "Antony",
//   "Amada",
//   "Idalia",
//   "Janella",
//   "Marla",
//   "Curtis",
//   "Shellie",
//   "Meggan",
//   "Nathanael",
//   "Jannette",
//   "Tyrell",
//   "Sheena",
//   "Maranda",
//   "Briana",
//   "Rosa",
//   "Rosanne",
//   "Herman",
//   "Wayne",
//   "Shamika",
//   "Suk",
//   "Clair",
//   "Olivia",
//   "Hans",
//   "Glennie",
// ];

// for (var i = 0; i < names.length; i++) {
//   open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//   close = open + Math.round(Math.random() * 10) + 3;
//   data.push({
//     category: names[i],
//     open: open,
//     close: close
//   });
// }

yAxis.data.setAll(data);
series.data.setAll(data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);

}); // end am5.ready()