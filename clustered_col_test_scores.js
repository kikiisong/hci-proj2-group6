am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv6");


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
  "all": 0.26,
  "black": -0.91,
  "white": 0.31
}, {
  "county": "Anne Arundel",
  "all": 0.95,
  "black": -0.78,
  "white": 1.7
}, {
  "county": "Baltimore City",
  "all": -1.92,
  "black": -2.15,
  "white": 0.11
}, {
  "county": "Baltimore County",
  "all": 0.22,
  "black": -0.96,
  "white": 1.22
}, {
  "county": "Calvert",
  "all": 1.29,
  "black": -0.42,
  "white": 1.61
}, {
  "county": "Caroline",
  "all": 0.44,
  "black": -1.07,
  "white": 0.86
}, {
  "county": "Carroll",
  "all": 1.34,
  "black": -0.24,
  "white": 1.44
}, {
  "county": "Cecil",
  "all": -0.09,
  "black": -1.56,
  "white": 0.14
}, {
  "county": "Charles",
  "all": 0.09,
  "black": -0.73,
  "white": 1.26
}, {
  "county": "Dorchester",
  "all": -0.85,
  "black": -2.27,
  "white": 0.27
}, {
  "county": "Frederick",
  "all": 1.06,
  "black": -0.58,
  "white": 1.45
}, {
  "county": "Garrett",
  "all": 0.2,
  "black": -0.04,
  "white": 0.2
}, {
  "county": "Harford",
  "all": 1.02,
  "black": -0.71,
  "white": 1.51
}, {
  "county": "Howard",
  "all": 1.74,
  "black": -0.23,
  "white": 2.4
}, {
  "county": "Kent",
  "all": -0.37,
  "black": -2.2,
  "white": 0.36
}, {
  "county": "Montgomery",
  "all": 1.08,
  "black": -0.5,
  "white": 2.62
}, {
  "county": "Prince George's",
  "all": -1.03,
  "black": -1.12,
  "white": 0.95
}, {
  "county": "Queen Anne's",
  "all": 1.03,
  "black": -1.04,
  "white": 1.28
}, {
  "county": "St. Mary's",
  "all": -0.38,
  "black": -1.12,
  "white": 0.32
}, {
  "county": "Somerset",
  "all": 0.8,
  "black": -1.21,
  "white": 1.28
}, {
  "county": "Talbot",
  "all": 0.1,
  "black": -1.92,
  "white": 0.82
}, {
  "county": "Washington",
  "all": 0.3,
  "black": -1.28,
  "white": 0.63
}, {
  "county": "Wicomico",
  "all": -0.13,
  "black": -1.58,
  "white": 0.93
}, {
  "county": "Worcester",
  "all": 1.72,
  "black": -0.34,
  "white": 2.41
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "county",
  renderer: am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9
  }),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));


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
    tooltipText: "{categoryX}, {name}: {valueY}",
    width: am5.percent(90),
    tooltipY: 0
  });

  // https://www.amcharts.com/docs/v4/tutorials/hide-or-relocate-label-bullets-for-small-columns/
  // series.columns.template.events.on("sizechanged", function (ev) {
  //   if (ev.target.dataItem && ev.target.dataItem.bullets) {
  //     var width = ev.target.pixelWidth;
  //     ev.target.dataItem.bullets.each(function(id, bullet) {
  //       if (width > 40) {
  //         bullet.locationY = 0.5;
  //         bullet.dy = 0;
  //       }
  //       else {
  //         bullet.locationY = 0;
  //         bullet.dy = -15;
  //       }
  //     });
  //   }
  // });

  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  // series.bullets.push(function () {
  //   return am5.Bullet.new(root, {
  //     locationY: 0,
  //     sprite: am5.Label.new(root, {
  //       text: "{valueY}",
  //       fill: root.interfaceColors.get("alternativeText"),
  //       centerY: 0,
  //       centerX: am5.p50,
  //       populateText: true
  //     })
  //   });
  // });

  legend.data.push(series);
}

makeSeries("All Races", "all");
makeSeries("Black", "black");
makeSeries("White", "white");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()