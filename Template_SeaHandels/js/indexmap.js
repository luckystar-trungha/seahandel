/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Low-detail map
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_vietnamHight;
chart.projection = new am4maps.projections.Miller();
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
  chart.zoomToMapObject(ev.target);
});
var label = chart.chartContainer.createChild(am4core.Label);
label.text = "Vienam";

// High detail map
// var chart2 = am4core.create("chartdiv2", am4maps.MapChart);
// chart2.geodata = am4geodata_franceHigh;
// chart2.projection = new am4maps.projections.Miller();
// var polygonSeries = chart2.series.push(new am4maps.MapPolygonSeries());
// polygonSeries.useGeodata = true;
// polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
//   chart2.zoomToMapObject(ev.target);
// });
// var label2 = chart2.chartContainer.createChild(am4core.Label);
// label2.text = "franceHigh";