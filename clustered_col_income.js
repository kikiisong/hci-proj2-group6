am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("income");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(
  am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  })
);

var data = [{
  "county": "Allegany",
  "all": 48170,
}, {
  "county": "Anne Arundel",
  "all": 100916,
  "black": 82360,
  "white": 106376
}, {
  "county": "Baltimore City",
  "all": 49780,
  "black": 39088,
  "white": 78527
}, {
  "county": "Baltimore County",
  "all": 76780,
  "black": 68143,
  "white": 82690
}, {
  "county": "Calvert",
  "all": 76972,
  "black": 70423,
  "white": 113838
}, {
  "county": "Caroline",
  "all": 111056,
  "black": 40208,
  "white": 63991
}, {
  "county": "Carroll",
  "all": 101810,
  "black": 87457,
  "white": 97356
}, {
  "county": "Cecil",
  "all": 75307,
  "black": 53171,
  "white": 80400
}, {
  "county": "Charles",
  "all": 102510,
  "black": 96264,
  "white": 102795
}, {
  "county": "Dorchester",
  "all": 48709,
  "black": 36783,
  "white": 62192
}, {
  "county": "Frederick",
  "all": 102951,
  "black": 76095,
  "white": 101782
}, {
  "county": "Garrett",
  "all": 59253,
  "black": 52617,
  "white": 52710
}, {
  "county": "Harford",
  "all": 91492,
  "black": 76291,
  "white": 93311
}, {
  "county": "Howard",
  "all": 121329,
  "black": 94192,
  "white": 134087
}, {
  "county": "Kent",
  "all": 65615,
  "black": 31742,
  "white": 65427
}, {
  "county": "Montgomery",
  "all": 110012,
  "black": 75960,
  "white": 134575
}, {
  "county": "Prince George's",
  "all": 85357,
  "black": 85576,
  "white": 95914
}, {
  "county": "Queen Anne's",
  "all": 101350,
  "black": 53313,
  "white": 100557
}, {
  "county": "St. Mary's",
  "all": 89123,
  "black": 49848,
  "white": 100330
}, {
  "county": "Somerset",
  "all": 38731,
  "black": 31020,
  "white": 51220
}, {
  "county": "Talbot",
  "all": 75714,
  "black": 39474,
  "white": 80623
}, {
  "county": "Washington",
  "all": 59785,
  "black": 40229,
  "white": 63155
}, {
  "county": "Wicomico",
  "all": 54351,
  "black": 43728,
  "white": 62410
}, {
  "county": "Worcester",
  "all": 65821,
  "black": 39614,
  "white": 66522
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});


var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "county",
  // renderer: am5xy.AxisRendererX.new(root, {
  //   cellStartLocation: 0.1,
  //   cellEndLocation: 0.9,
  // }),
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));

yAxis.children.unshift(
  am5.Label.new(root, {
    rotation: -90,
    text: "Yearly Income",
    y: am5.p50,
    centerX: am5.p50
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    categoryXField: "county"
  }));

  series.columns.template.setAll({
    tooltipText: "{categoryX}, {name}: ${valueY}",
    width: am5.percent(90),
    tooltipY: 0
  });

  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      locationY: 0,
      sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
      })
    });
  });

  legend.data.push(series);
}

makeSeries("Average income for all households", "all");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()