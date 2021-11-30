am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    
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
      wheelX: "panX",
      wheelY: "zoomX"
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    
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
      maxDeviation: 0.3,
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "cost_burden",
      sequencedInterpolation: true,
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root, {
        labelText:"{valueY}%"
      })
    }));
    
    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    
    // Set data
    // TODO
    var data = [{
    "year": "Allegany",
    "cost_burden": 12
    }, {
    "year": "Anne Arundel",
    "cost_burden": 11
    }, {
    "year": "Baltimore City",
    "cost_burden": 20
    }, {
    "year": "Baltimore County",
    "cost_burden": 14
    }, {
    "year": "Calvert",
    "cost_burden": 9
    }, {
    "year": "Caroline",
    "cost_burden": 14
    }, {
    "year": "Carroll",
    "cost_burden": 10
    }, {
    "year": "Cecil",
    "cost_burden": 11
    }, {
    "year": "Charles",
    "cost_burden": 12
    }, {
    "year": "Dorchester",
    "cost_burden": 15
    }, {
    "year": "Frederick",
    "cost_burden": 11
    }, {
    "year": "Garrett",
    "cost_burden": 11
    }, {
    "year": "Harford",
    "cost_burden": 12
    }, {
    "year": "Howard",
    "cost_burden": 12
    }, {
    "year": "Kent",
    "cost_burden": 15
    }, {
    "year": "Montgomery",
    "cost_burden": 15
    }, {
    "year": "Prince George's",
    "cost_burden": 16
    }, {
    "year": "Queen Anne's",
    "cost_burden": 11
    }, {
    "year": "St. Mary's",
    "cost_burden": 11
    }, {
    "year": "Somerset",
    "cost_burden": 23
    }, {
    "year": "Talbot",
    "cost_burden": 13
    }, {
    "year": "Washington",
    "cost_burden": 13
    }, {
    "year": "Wicomico",
    "cost_burden": 16
    }, {
    "year": "Worcester",
    "cost_burden": 15
    }]
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()