Cesium.Ion.defaultAccessToken = "your cesium token"
const visor = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: Cesium.createWorldImagery({
    style: Cesium.IonWorldImageryStyle.AERIAL,
  }),
});

visor.camera.flyTo({  
  destination: Cesium.Cartesian3.fromDegrees(
    32.524736478033624,
    37.861315707137855,
    300000
  ),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-90, 0),
  },
});

visor.dataSources.add(
  Cesium.GeoJsonDataSource.load("assets/eczaneler.geojson", {
    fill: Cesium.Color.BLUE,
    stokeWidth: 3,
  })
);
