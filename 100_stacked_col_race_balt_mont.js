am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv19");


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

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

var data = [{
  "county": "Baltimore City",
  "other": 7.2,
  "black": 61.8, 
  "american_indian": 0.5,
  "asian": 2.7, 
  "hawaiian": 0.1, 
  "white": 27.7
}, {
  "county": "Montgomery",
  "other": 22,
  "black": 18.7, 
  "american_indian": 0.7,
  "asian": 15.6, 
  "hawaiian": 0.1, 
  "white": 42.9
}]

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "county",
  renderer: am5xy.AxisRendererX.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max: 100,
  numberFormat: "#'%'",
  strictMinMax: true,
  calculateTotals: true,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    valueYShow: "valueYTotalPercent",
    categoryXField: "county"
  }));

  series.columns.template.setAll({
    tooltipText: "{categoryX}, {name}: {valueYTotalPercent.formatNumber('#.#')}%",
    tooltipY: am5.percent(10)
  });
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  // series.bullets.push(function () {
  //   return am5.Bullet.new(root, {
  //     sprite: am5.Label.new(root, {
  //       text: "{valueYTotalPercent.formatNumber('#.#')}%",
  //       fill: root.interfaceColors.get("alternativeText"),
  //       centerY: am5.p50,
  //       centerX: am5.p50,
  //       populateText: true
  //     })
  //   });
  // });

  legend.data.push(series);
}

makeSeries("Black", "black");
makeSeries("White", "white");
makeSeries("Asian", "asian");
makeSeries("American Indian & Alaska Native", "american_indian");
makeSeries("Native Hawaiian/Other Pacific Islander", "hawaiian");
makeSeries("Other", "other");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()