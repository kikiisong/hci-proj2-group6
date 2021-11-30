am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("life_expectancy");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none"
  })
);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
// xRenderer.labels.template.setAll({ text: "" });      // changed
xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15,
  text: ""
});

// changed -- made label text equal to ""
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "category",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {
      labelText: "{realName}"
      // labelText: ""
    })
  })
);

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    min: 60,
    max: 90,
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);

yAxis.children.unshift(
  am5.Label.new(root, {
    rotation: -90,
    text: "Life Expectancy (years)",
    y: am5.p50,
    centerX: am5.p50
  })
);

// var yAxis2 = chart.yAxes.push(
//   am5xy.ValueAxis.new(root, {
//     maxDeviation: 0.3,
//     syncWithAxis: yAxis,
//     renderer: am5xy.AxisRendererY.new(root, { opposite: true })
//   })
// );

// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "category",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{provider}, {realName}: {valueY}"
    })
  })
);

series.columns.template.setAll({
  fillOpacity: 0.9,
  strokeOpacity: 0
});
series.columns.template.adapters.add("fill", (fill, target) => {
  return chart.get("colors").getIndex(series.columns.indexOf(target)%2);
});

series.columns.template.adapters.add("stroke", (stroke, target) => {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

var lineSeries = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Series 2",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "quantity",
    sequencedInterpolation: true,
    stroke: chart.get("colors").getIndex(13),
    fill: chart.get("colors").getIndex(13),
    categoryXField: "category",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{provider}, All Races: {valueY}"
    })
  })
);

lineSeries.strokes.template.set("strokeWidth", 2);

lineSeries.bullets.push(function () {
  return am5.Bullet.new(root, {
    locationY: 1,
    locationX: undefined,
    sprite: am5.Circle.new(root, {
      radius: 5,
      fill: lineSeries.get("fill")
    })
  });
});

// when data validated, adjust location of data item based on count
lineSeries.events.on("datavalidated", function () {
  am5.array.each(lineSeries.dataItems, function (dataItem) {
    // if count divides by two, location is 0 (on the grid)
    if (
      dataItem.dataContext.count / 2 ==
      Math.round(dataItem.dataContext.count / 2)
    ) {
      dataItem.set("locationX", 0);
    }
    // otherwise location is 0.5 (middle)
    else {
      dataItem.set("locationX", 0.5);
    }
  });
});

var chartData = [];

// Set data
// quantity is the line
var data = {
  "Allegany": {
    "Black": 74.9,
    "White": 78,
    quantity: 76.7
  },
  "Anne Arundel": {
    "Black": 78,
    "White": 79.1,
    quantity: 79.3
  },
  "Baltimore City": {
    "Black": 70.6,
    "White": 75.7,
    quantity: 72.8
  },
  "Baltimore County": {
    "Black": 76.5,
    "White": 78,
    quantity: 78.1
  },
  "Calvert": {
    "Black": 78.3,
    "White": 79.3,
    quantity: 79.5
  },
  "Caroline": {
    "Black": 75.1,
    "White": 77,
    quantity: 76.8
  },
  "Carroll": {
    "Black": 77.4,
    "White": 78.4,
    quantity: 78.6
  },
  "Cecil": {
    "Black": 72.7,
    "White": 75.5,
    quantity: 75.7
  },
  "Charles": {
    "Black": 77.8,
    "White": 78,
    quantity: 78.6
  },
  "Dorchester": {
    "Black": 70.5,
    "White": 77.1,
    quantity: 75.6
  },
  "Frederick": {
    "Black": 78.4,
    "White": 80.2,
    quantity: 80.6
  },
  "Garrett": {
    "Black": 0,
    "White": 0,
    quantity: 78.3
  },
  "Harford": {
    "Black": 74.9,
    "White": 78,
    quantity: 79
  },
  "Howard": {
    "Black": 80.7,
    "White": 82.8,
    quantity: 83.2
  },
  "Kent": {
    "Black": 75.2,
    "White": 79.2,
    quantity: 79
  },
  "Montgomery": {
    "Black": 82.1,
    "White": 83.8,
    quantity: 84.6
  },
  "Prince George's": {
    "Black": 78.6,
    "White": 79.2,
    quantity: 79.6
  },
  "Queen Anne's": {
    "Black": 73.8,
    "White": 80,
    quantity: 79.8
  },
  "St. Mary's": {
    "Black": 75.8,
    "White": 80.8,
    quantity: 78.7
  },
  "Somerset": {
    "Black": 75,
    "White": 74.3,
    quantity: 75.5
  },
  "Talbot": {
    "Black": 75.8,
    "White": 80.8,
    quantity: 80.4
  },
  "Washington": {
    "Black": 75.3,
    "White": 76.7,
    quantity: 76.8
  },
  "Wicomico": {
    "Black": 74.6,
    "White": 76.9,
    quantity: 76.7
  },
  "Worcester": {
    "Black": 75.5,
    "White": 80.1,
    quantity: 76.7
  }
};

// process data ant prepare it for the chart
for (var providerName in data) {
  var providerData = data[providerName];

  // add data of one provider to temp array
  var tempArray = [];
  var count = 0;
  // add items
  for (var itemName in providerData) {
    if (itemName != "quantity") {
      count++;
      // we generate unique category for each column (providerName + "_" + itemName) and store realName
      tempArray.push({
        category: providerName + "_" + itemName,
        realName: itemName,
        value: providerData[itemName],
        provider: providerName
      });
    }
  }
  // sort temp array
  tempArray.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    } else if (a.value < b.value) {
      return -1;
    } else {
      return 0;
    }
  });

  // add quantity and count to middle data item (line series uses it)
  var lineSeriesDataIndex = Math.floor(count / 2);
  tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
  tempArray[lineSeriesDataIndex].count = count;
  // push to the final data
  am5.array.each(tempArray, function (item) {
    chartData.push(item);
  });

  // create range (the additional label at the bottom)

  var range = xAxis.makeDataItem({});
  xAxis.createAxisRange(range);

  range.set("category", tempArray[0].category);
  range.set("endCategory", tempArray[tempArray.length - 1].category);

  var label = range.get("label");

  label.setAll({
    text: tempArray[0].provider,
    dy: 30,
    fontWeight: "bold",
    tooltipText: tempArray[0].provider
  });

  var tick = range.get("tick");
  tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 0 });

  var grid = range.get("grid");
  grid.setAll({ strokeOpacity: 1 });
}

// add range for the last grid
var range = xAxis.makeDataItem({});
xAxis.createAxisRange(range);
range.set("category", chartData[chartData.length - 1].category);
var tick = range.get("tick");
tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 1 });

var grid = range.get("grid");
grid.setAll({ strokeOpacity: 1, location: 1 });

xAxis.data.setAll(chartData);
series.data.setAll(chartData);
lineSeries.data.setAll(chartData);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);

}); // end am5.ready()