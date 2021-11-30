am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv7");


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
  "county": "Allegany",
  "other": 3.8,
  "black": 8.1, 
  "american_indian": 0.2,
  "asian": 1.1, 
  "hawaiian": 0.1, 
  "white": 86.7
}, {
  "county": "Anne Arundel",
  "other": 11.1,
  "black": 17.5, 
  "american_indian": 0.4,
  "asian": 4.2, 
  "hawaiian": 0.1, 
  "white": 66.7
}, {
  "county": "Baltimore City",
  "other": 7.2,
  "black": 61.8, 
  "american_indian": 0.5,
  "asian": 2.7, 
  "hawaiian": 0.1, 
  "white": 27.7
}, {
  "county": "Baltimore County",
  "other": 7.8,
  "black": 29.6, 
  "american_indian": 0.4,
  "asian": 6.3, 
  "hawaiian": 0.1, 
  "white": 55.8
}, {
  "county": "Calvert",
  "other": 7.1,
  "black": 12.9, 
  "american_indian": 0.5,
  "asian": 1.9, 
  "hawaiian": 0.1, 
  "white": 77.5
}, {
  "county": "Caroline",
  "other": 8.9,
  "black": 13.6, 
  "american_indian": 0.9,
  "asian": 1.2, 
  "hawaiian": 0.3, 
  "white": 75.1
}, {
  "county": "Carroll",
  "other": 5.5,
  "black": 3.7, 
  "american_indian": 0.3,
  "asian": 2.1, 
  "hawaiian": 0.1, 
  "white": 88.3
}, {
  "county": "Cecil",
  "other": 6.7,
  "black": 6.8, 
  "american_indian": 0.4,
  "asian": 1.4, 
  "hawaiian": 0.1, 
  "white": 84.6
}, {
  "county": "Charles",
  "other": 9.6,
  "black": 48.9, 
  "american_indian": 0.8,
  "asian": 3.4, 
  "hawaiian": 0.1, 
  "white": 37.2
}, {
  "county": "Dorchester",
  "other": 8,
  "black": 27.9, 
  "american_indian": 0.5,
  "asian": 1.2, 
  "hawaiian": 0.1, 
  "white": 62.3
}, {
  "county": "Frederick",
  "other": 12.8,
  "black": 9.9, 
  "american_indian": 0.5,
  "asian": 5, 
  "hawaiian": 0.1, 
  "white": 71.7
}, {
  "county": "Garrett",
  "other": 2.1,
  "black": 1.1, 
  "american_indian": 0.2,
  "asian": 0.4, 
  "hawaiian": 0, 
  "white": 96.2
}, {
  "county": "Harford",
  "other": 7.1,
  "black": 14.3, 
  "american_indian": 0.3,
  "asian": 3.1, 
  "hawaiian": 0.1, 
  "white": 75.1
}, {
  "county": "Howard",
  "other": 10.3,
  "black": 19.6, 
  "american_indian": 0.4,
  "asian": 19.3, 
  "hawaiian": 0.1, 
  "white": 50.3
}, {
  "county": "Kent",
  "other": 5.9,
  "black": 14.4, 
  "american_indian": 0.4,
  "asian": 1.4, 
  "hawaiian": 0.1, 
  "white": 77.8
}, {
  "county": "Montgomery",
  "other": 22,
  "black": 18.7, 
  "american_indian": 0.7,
  "asian": 15.6, 
  "hawaiian": 0.1, 
  "white": 42.9
}, {
  "county": "Prince George's",
  "other": 20.2,
  "black": 61.7, 
  "american_indian": 1.2,
  "asian": 4.4, 
  "hawaiian": 0.2, 
  "white": 12.3
}, {
  "county": "Queen Anne's",
  "other": 5.8,
  "black": 6.1, 
  "american_indian": 0.5,
  "asian": 1.2, 
  "hawaiian": 0.1, 
  "white": 86.3
}, {
  "county": "St. Mary's",
  "other": 8.6,
  "black": 14.4, 
  "american_indian": 0.5,
  "asian": 2.9, 
  "hawaiian": 0.1, 
  "white": 73.5
}, {
  "county": "Somerset",
  "other": 6.2,
  "black": 40.8, 
  "american_indian": 0.5,
  "asian": 1, 
  "hawaiian": 0.1, 
  "white": 51.4
}, {
  "county": "Talbot",
  "other": 8.3,
  "black": 12.3, 
  "american_indian": 0.4,
  "asian": 1.4, 
  "hawaiian": 0.2, 
  "white": 77.4
}, {
  "county": "Washington",
  "other": 8.3,
  "black": 12, 
  "american_indian": 0.3,
  "asian": 1.9, 
  "hawaiian": 0.1, 
  "white": 77.4
}, {
  "county": "Wicomico",
  "other": 7.8,
  "black": 26.7, 
  "american_indian": 0.4,
  "asian": 3, 
  "hawaiian": 0.1, 
  "white": 62.0
}, {
  "county": "Worcester",
  "other": 5.4,
  "black": 12.7, 
  "american_indian": 0.4,
  "asian": 1.5, 
  "hawaiian": 0, 
  "white": 80.0
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