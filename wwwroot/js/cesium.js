// --- Token ---
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2VhOTlhYi05OGU1LTQ3M2ItOGIwMy05ZjU4ZTBiYWQyY2MiLCJpZCI6MTMxNjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjI3MjI0NjR9.Mab30P6FaFC2ZqzwHP5WY5GPibtLBeGFbpl2w7Rys7I";

// --- Cesium Viewer ---
var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: new Cesium.CesiumTerrainProvider({
        url: Cesium.IonResource.fromAssetId(1),
        requestWaterMask: true,
        requestVertexNormals: true
    }),
    requestRenderMode: false,
    maximumRenderTimeChange: Infinity
});

viewer.scene.globe.depthTestAgainstTerrain = true;
viewer.scene.globe.enableLighting = true;
viewer.scene.debugShowFramesPerSecond = true;
viewer.clock.shouldAnimate = true;

// --- Camera Controls ---
// Reference: https://cesium.com/docs/tutorials/camera/
var defaultPosition = new Cesium.Cartesian3.fromDegrees(133.5, -27.5, 7000000);
var defaultCameraView = {
    destination: defaultPosition
};
viewer.scene.camera.setView(defaultCameraView);
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (evt) {
    evt.cancel = true;
    viewer.scene.camera.flyTo(defaultCameraView);
})

// --- Tileset ---
var tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(96769)
    })
);

// --- Custom Button Functions ---
var myBtn = document.querySelector("#palmerstonCDU");
myBtn.addEventListener("click", function () {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(130.976496, -12.474955, 500.0)
    })
});