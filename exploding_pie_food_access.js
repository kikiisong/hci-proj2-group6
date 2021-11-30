am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("pie_grocery");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.p100,
    height: am5.p100,
    layout: root.horizontalLayout
  })
);

// Create main chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = container.children.push(
  am5percent.PieChart.new(root, {
    radius: am5.percent(70),
    tooltip: am5.Tooltip.new(root, {})
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    alignLabels: false
  })
);

series.labels.template.setAll({
  textType: "circular",
  radius: 4,
  forceHidden: true
});

series.ticks.template.set("visible", false);
series.slices.template.set("toggleKey", "none");

// add events
series.slices.template.events.on("click", function(e) {
  selectSlice(e.target);
});

// Create sub chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var subChart = container.children.push(
  am5percent.PieChart.new(root, {
    radius: am5.percent(25),
    tooltip: am5.Tooltip.new(root, {})
  })
);

// Create sub series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var subSeries = subChart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  })
);

subSeries.data.setAll([
  { category: "Supermarket", value: 0 },
  { category: "Convenience", value: 0 },
  { category: "Small Grocery", value: 0 }
]);
subSeries.slices.template.set("toggleKey", "none");

var selectedSlice;

series.on("startAngle", function() {
  updateLines();
});

container.events.on("boundschanged", function() {
  root.events.on("frameended", function(){
    updateLines();
   })
})

function updateLines() {
  if (selectedSlice) {
    var startAngle = selectedSlice.get("startAngle");
    var arc = selectedSlice.get("arc");
    var radius = selectedSlice.get("radius");

    var x00 = radius * am5.math.cos(startAngle);
    var y00 = radius * am5.math.sin(startAngle);

    var x10 = radius * am5.math.cos(startAngle + arc);
    var y10 = radius * am5.math.sin(startAngle + arc);

    var subRadius = subSeries.slices.getIndex(0).get("radius");
    var x01 = 0;
    var y01 = -subRadius;

    var x11 = 0;
    var y11 = subRadius;

    var point00 = series.toGlobal({ x: x00, y: y00 });
    var point10 = series.toGlobal({ x: x10, y: y10 });

    var point01 = subSeries.toGlobal({ x: x01, y: y01 });
    var point11 = subSeries.toGlobal({ x: x11, y: y11 });

    line0.set("points", [point00, point01]);
    line1.set("points", [point10, point11]);
  }
}

// lines
var line0 = container.children.push(
  am5.Line.new(root, {
    position: "absolute",
    stroke: root.interfaceColors.get("text"),
    strokeDasharray: [2, 2]
  })
);
var line1 = container.children.push(
  am5.Line.new(root, {
    position: "absolute",
    stroke: root.interfaceColors.get("text"),
    strokeDasharray: [2, 2]
  })
);

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([
  {
    category: "Allegany",
    value: 80,
    subData: [
      { category: "Supermarket", value: 7 },
      { category: "Convenience", value: 50 },
      { category: "Small Grocery", value: 23 }
    ]
  },
  {
    category: "Anne Arundel",
    value: 435,
    subData: [
      { category: "Supermarket", value: 67 },
      { category: "Convenience", value: 286 },
      { category: "Small Grocery", value: 82 }
    ]
  },
  {
    category: "Baltimore City",
    value: 933,
    subData: [
      { category: "Supermarket", value: 46 },
      { category: "Convenience", value: 291 },
      { category: "Small Grocery", value: 596 }
    ]
  },
  {
    category: "Baltimore County",
    value: 724,
    subData: [
      { category: "Supermarket", value: 111 },
      { category: "Convenience", value: 429 },
      { category: "Small Grocery", value: 184 }
    ]
  },
  {
    category: "Calvert",
    value: 59,
    subData: [
      { category: "Supermarket", value: 15 },
      { category: "Convenience", value: 34 },
      { category: "Small Grocery", value: 10 }
    ]
  },
  {
    category: "Caroline",
    value: 40,
    subData: [
      { category: "Supermarket", value: 4 },
      { category: "Convenience", value: 18 },
      { category: "Small Grocery", value: 18 }
    ]
  },
  {
    category: "Carroll",
    value: 119,
    subData: [
      { category: "Supermarket", value: 27 },
      { category: "Convenience", value: 71 },
      { category: "Small Grocery", value: 21 }
    ]
  },
  {
    category: "Cecil",
    value: 86,
    subData: [
      { category: "Supermarket", value: 8 },
      { category: "Convenience", value: 58 },
      { category: "Small Grocery", value: 20 }
    ]
  },
  {
    category: "Charles",
    value: 112,
    subData: [
      { category: "Supermarket", value: 19 },
      { category: "Convenience", value: 73 },
      { category: "Small Grocery", value: 20 }
    ]
  },
  {
    category: "Dorchester",
    value: 47,
    subData: [
      { category: "Supermarket", value: 4 },
      { category: "Convenience", value: 19 },
      { category: "Small Grocery", value: 24 }
    ]
  },
  {
    category: "Frederick",
    value: 181,
    subData: [
      { category: "Supermarket", value: 34 },
      { category: "Convenience", value: 105 },
      { category: "Small Grocery", value: 42 }
    ]
  },
  {
    category: "Garrett",
    value: 57,
    subData: [
      { category: "Supermarket", value: 5 },
      { category: "Convenience", value: 35 },
      { category: "Small Grocery", value: 17 }
    ]
  },
  {
    category: "Harford",
    value: 188,
    subData: [
      { category: "Supermarket", value: 32 },
      { category: "Convenience", value: 126 },
      { category: "Small Grocery", value: 30 }
    ]
  },
  {
    category: "Howard",
    value: 164,
    subData: [
      { category: "Supermarket", value: 37 },
      { category: "Convenience", value: 80 },
      { category: "Small Grocery", value: 47 }
    ]
  },
  {
    category: "Kent",
    value: 31,
    subData: [
      { category: "Supermarket", value: 3 },
      { category: "Convenience", value: 17 },
      { category: "Small Grocery", value: 11 }
    ]
  },
  {
    category: "Montgomery",
    value: 614,
    subData: [
      { category: "Supermarket", value: 121 },
      { category: "Convenience", value: 307 },
      { category: "Small Grocery", value: 186 }
    ]
  },
  {
    category: "Prince George's",
    value: 740,
    subData: [
      { category: "Supermarket", value: 107 },
      { category: "Convenience", value: 429 },
      { category: "Small Grocery", value: 204 }
    ]
  },
  {
    category: "Queen Anne's",
    value: 49,
    subData: [
      { category: "Supermarket", value: 5 },
      { category: "Convenience", value: 36 },
      { category: "Small Grocery", value: 8 }
    ]
  },
  {
    category: "St. Mary's",
    value: 77,
    subData: [
      { category: "Supermarket", value: 12 },
      { category: "Convenience", value: 48 },
      { category: "Small Grocery", value: 17 }
    ]
  },
  {
    category: "Somerset",
    value: 27,
    subData: [
      { category: "Supermarket", value: 2 },
      { category: "Convenience", value: 13 },
      { category: "Small Grocery", value: 12 }
    ]
  },
  {
    category: "Talbot",
    value: 48,
    subData: [
      { category: "Supermarket", value: 10 },
      { category: "Convenience", value: 20 },
      { category: "Small Grocery", value: 18 }
    ]
  },
  {
    category: "Washington",
    value: 151,
    subData: [
      { category: "Supermarket", value: 20 },
      { category: "Convenience", value: 95 },
      { category: "Small Grocery", value: 36 }
    ]
  },
  {
    category: "Wicomico",
    value: 127,
    subData: [
      { category: "Supermarket", value: 14 },
      { category: "Convenience", value: 73 },
      { category: "Small Grocery", value: 40 }
    ]
  },
  {
    category: "Worchester",
    value: 74,
    subData: [
      { category: "Supermarket", value: 10 },
      { category: "Convenience", value: 53 },
      { category: "Small Grocery", value: 11 }
    ]
  }
]);

function selectSlice(slice) {
  selectedSlice = slice;
  var dataItem = slice.dataItem;
  var dataContext = dataItem.dataContext;

  if (dataContext) {
    var i = 0;
    subSeries.data.each(function(dataObject) {
      subSeries.data.setIndex(i, dataContext.subData[i]);
      i++;
    });
  }

  var middleAngle = slice.get("startAngle") + slice.get("arc") / 2;
  var firstAngle = series.dataItems[0].get("slice").get("startAngle");

  series.animate({
    key: "startAngle",
    to: firstAngle - middleAngle,
    duration: 1000,
    easing: am5.ease.out(am5.ease.cubic)
  });
  series.animate({
    key: "endAngle",
    to: firstAngle - middleAngle + 360,
    duration: 1000,
    easing: am5.ease.out(am5.ease.cubic)
  });
}

container.appear(1000, 10);

series.events.on("datavalidated", function() {
  selectSlice(series.slices.getIndex(0));
});

}); // end am5.ready()