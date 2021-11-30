am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chart_housing_cost");

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
// var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
// xRenderer.labels.template.setAll({ text: "" });      // changed

var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
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
    //rotation: 60, // changed to make x axis disappear
    maxDeviation: 0,
    categoryField: "category",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {
      labelText: "{realName}"
    })
  })
);

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);

yAxis.children.unshift(
  am5.Label.new(root, {
    rotation: -90,
    text: "Cost of Living (index)",
    y: am5.p50,
    centerX: am5.p50
  })
);

var yAxis2 = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    syncWithAxis: yAxis,
    renderer: am5xy.AxisRendererY.new(root, { opposite: true })
  })
);

yAxis2.children.unshift(
  am5.Label.new(root, {
    rotation: -90,
    text: "% Severe Burden (percentages)",
    y: am5.p50,
    centerX: am5.p50
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis2,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "category",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{provider}, {realName}: {valueY}%"
    })
  })
);

series.columns.template.setAll({
  fillOpacity: 0.9,
  strokeOpacity: 0
});
series.columns.template.adapters.add("fill", (fill, target) => {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
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
      labelText: "{provider}, Cost of Living: {valueY}"
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
    "% Severe Burden": 12,
    quantity: 84.9
  },
  "Anne Arundel": {
    "% Severe Burden": 11,
    quantity: 119.6
  },
  "Baltimore City": {
    "% Severe Burden": 20,
    quantity: 101.3
  },
  "Baltimore County": {
    "% Severe Burden": 14,
    quantity: 109.9
  },
  "Calvert": {
    "% Severe Burden": 9,
    quantity: 121.7
  },
  "Caroline": {
    "% Severe Burden": 14,
    quantity: 98.8
  },
  "Carroll": {
    "% Severe Burden": 10,
    quantity: 113.8
  },
  "Cecil": {
    "% Severe Burden": 11,
    quantity: 105.6
  },
  "Charles": {
    "% Severe Burden": 12,
    quantity: 123.5
  },
  "Dorchester": {
    "% Severe Burden": 15,
    quantity: 94.3
  },
  "Frederick": {
    "% Severe Burden": 11,
    quantity: 116.4
  },
  "Garrett": {
    "% Severe Burden": 11,
    quantity: 88.4
  },
  "Harford": {
    "% Severe Burden": 12,
    quantity: 110.3
  },
  "Howard": {
    "% Severe Burden": 12,
    quantity: 131.6
  },
  "Kent": {
    "% Severe Burden": 15,
    quantity: 96.2
  },
  "Montgomery": {
    "% Severe Burden": 15,
    quantity: 130.4
  },
  "Prince George's": {
    "% Severe Burden": 16,
    quantity: 121.3
  },
  "Queen Anne's": {
    "% Severe Burden": 11,
    quantity: 115.5
  },
  "St. Mary's": {
    "% Severe Burden": 11,
    quantity: 112
  },
  "Somerset": {
    "% Severe Burden": 23,
    quantity: 86.2
  },
  "Talbot": {
    "% Severe Burden": 13,
    quantity: 100.9
  },
  "Washington": {
    "% Severe Burden": 13,
    quantity: 97.7
  },
  "Wicomico": {
    "% Severe Burden": 16,
    quantity: 98.6
  },
  "Worcester": {
    "% Severe Burden": 15,
    quantity: 99.1
  }
};

// process data and prepare it for the chart
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