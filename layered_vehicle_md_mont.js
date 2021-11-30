am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv10");


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
    "year": "Baltimore City",
    "0.5": 47,
    "1": 5, 
    "vehicle": 30
    }, {
    "year": "Montgomery",
    "0.5": 56,
    "1": 20, 
    "vehicle": 7.5
    }]

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: am5xy.AxisRendererX.new(root, {}),
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
      width: am5.percent(65),
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
      width: am5.percent(50),
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