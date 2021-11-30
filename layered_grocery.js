am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("layered_grocery");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
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

    // TODO
    var data = [{
    "year": "Allegany",
    "0.5": 94,
    "1": 66, 
    "vehicle": 10.66
    }, {
    "year": "Anne Arundel",
    "0.5": 70,
    "1": 36, 
    "vehicle": 3.89
    }, {
    "year": "Baltimore City",
    "0.5": 47,
    "1": 5, 
    "vehicle": 28.96
    }, {
    "year": "Baltimore County",
    "0.5": 66,
    "1": 28, 
    "vehicle": 7.75
    }, {
    "year": "Calvert",
    "0.5": 89,
    "1": 77, 
    "vehicle": 3.23
    }, {
    "year": "Caroline",
    "0.5": 92,
    "1": 77, 
    "vehicle": 6.34
    }, {
    "year": "Carroll",
    "0.5": 85,
    "1": 65, 
    "vehicle": 4.26
    }, {
    "year": "Cecil",
    "0.5": 88,
    "1": 71, 
    "vehicle": 5.14
    }, {
    "year": "Charles",
    "0.5": 77,
    "1": 58, 
    "vehicle": 3.36
    }, {
    "year": "Dorchester",
    "0.5": 90,
    "1": 71, 
    "vehicle": 9.47
    }, {
    "year": "Frederick",
    "0.5": 71,
    "1": 48, 
    "vehicle": 4.67
    }, {
    "year": "Garrett",
    "0.5": 98,
    "1": 85, 
    "vehicle": 6.84
    }, {
    "year": "Harford",
    "0.5": 76,
    "1": 44, 
    "vehicle": 5
    }, {
    "year": "Howard",
    "0.5": 65,
    "1": 28, 
    "vehicle": 3.55
    }, {
    "year": "Kent",
    "0.5": 81,
    "1": 62, 
    "vehicle": 11.53
    }, {
    "year": "Montgomery",
    "0.5": 56,
    "1": 20, 
    "vehicle": 7.66
    }, {
    "year": "Prince George's",
    "0.5": 60,
    "1": 25, 
    "vehicle": 8.9
    }, {
    "year": "Queen Anne's",
    "0.5": 90,
    "1": 78, 
    "vehicle": 3.21
    }, {
    "year": "St. Mary's",
    "0.5": 82,
    "1": 70, 
    "vehicle": 5.26
    }, {
    "year": "Somerset",
    "0.5": 91,
    "1": 71, 
    "vehicle": 11.4
    }, {
    "year": "Talbot",
    "0.5": 94,
    "1": 73, 
    "vehicle": 5.23
    }, {
    "year": "Washington",
    "0.5": 81,
    "1": 50, 
    "vehicle": 8.41
    }, {
    "year": "Wicomico",
    "0.5": 78,
    "1": 54, 
    "vehicle": 7.61
    }, {
    "year": "Worcester",
    "0.5": 83,
    "1": 54, 
    "vehicle": 7.2
    }]

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });


    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      //renderer: am5xy.AxisRendererX.new(root, {}),
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {
        themeTags: ["axis"],
        animationDuration: 200
      })
    }));

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    yAxis.children.unshift(
      am5.Label.new(root, {
        rotation: -90,
        text: "Percentages",
        y: am5.p50,
        centerX: am5.p50
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    var series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "% People Beyond 1/2 Mile From a Grocery Store",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "0.5",
      categoryXField: "year",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "% People Beyond 1/2 Mile From a Grocery Store: {valueY}%"
      })
    }));

    series0.columns.template.setAll({
      width: am5.percent(80),
      tooltipY: 0
    });


    series0.data.setAll(data);

    var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "% People Beyond 1 Mile From a Grocery Store",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "1",
      categoryXField: "year",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "% People Beyond 1 Mile From a Grocery Store: {valueY}%"
      })
    }));

    series1.columns.template.setAll({
      width: am5.percent(50),
      tooltipY: 0
    });

    series1.data.setAll(data);

    var series2 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "% Households without Vehicle Access",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "vehicle",
      categoryXField: "year",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "% Households without Vehicle Access: {valueY}%"
      })
    }));

    series2.columns.template.setAll({
      width: am5.percent(25),
      tooltipY: 0
    });

    series2.data.setAll(data);
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    series1.appear();
    series0.appear();
    series2.appear();
    series1.appear();
    series0.appear();

}); // end am5.ready()