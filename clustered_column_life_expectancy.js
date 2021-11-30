am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv9");


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
  "all": 76.7,
  "black": 74.9,
  "white": 76.3
}, {
  "county": "Anne Arundel",
  "all": 79.3,
  "black": 78,
  "white": 79.1
}, {
  "county": "Baltimore City",
  "all": 72.8,
  "black": 70.6,
  "white": 75.7
}, {
  "county": "Baltimore County",
  "all": 78.1,
  "black": 76.5,
  "white": 78
}, {
  "county": "Calvert",
  "all": 79.5,
  "black": 78.3,
  "white": 79.3
}, {
  "county": "Caroline",
  "all": 76.8,
  "black": 75.1,
  "white": 77
}, {
  "county": "Carroll",
  "all": 78.6,
  "black": 77.4,
  "white": 78.4
}, {
  "county": "Cecil",
  "all": 75.7,
  "black": 72.7,
  "white": 75.5
}, {
  "county": "Charles",
  "all": 78.6,
  "black": 77.8,
  "white": 78
}, {
  "county": "Dorchester",
  "all": 75.6,
  "black": 70.5,
  "white": 77.1
}, {
  "county": "Frederick",
  "all": 80.6,
  "black": 78.4,
  "white": 80.2
}, {
  "county": "Garrett",
  "all": 78.3,

}, {
  "county": "Harford",
  "all": 79.0,
  "black": 77.3,
  "white": 78.9
}, {
  "county": "Howard",
  "all": 83.2,
  "black": 80.7,
  "white": 82.8
}, {
  "county": "Kent",
  "all": 79,
  "black": 75.2,
  "white": 79.2
}, {
  "county": "Montgomery",
  "all": 84.6,
  "black": 82.1,
  "white": 83.8
}, {
  "county": "Prince George's",
  "all": 79.6,
  "black": 78.6,
  "white": 79.2
}, {
  "county": "Queen Anne's",
  "all": 79.8,
  "black": 73.8,
  "white": 80
}, {
  "county": "St. Mary's",
  "all": 78.7,
  "black": 75.8,
  "white": 78.6
}, {
  "county": "Somerset",
  "all": 75.5,
  "black": 75,
  "white": 74.3
}, {
  "county": "Talbot",
  "all": 80.4,
  "black": 75.8,
  "white": 80.8
}, {
  "county": "Washington",
  "all": 76.8,
  "black": 75.3,
  "white": 76.7
}, {
  "county": "Wicomico",
  "all": 76.7,
  "black": 74.6,
  "white": 76.9
}, {
  "county": "Worcester",
  "all": 79.7,
  "black": 75.5,
  "white": 80.1
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
    tooltipText: "{name}, {categoryX}: {valueY}",
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

makeSeries("All Races", "all");
makeSeries("Black", "black");
makeSeries("White", "white");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()