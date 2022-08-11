console.log("Hey Back to School DS23");
let viz;
// Create a variable to store the viz container
// Create a variable to store the dashboard options
// Create a variable to store the URL
const VizContainer = document.getElementById("vizContainer");
const option = {
  device: "desktop",
  height: "800px",
  width: "1300px",
  toolbarPosition: "ApiToolbarPosition.Top",
};
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

function initViz() {
  viz = new tableau.Viz(vizContainer, url, option);
}

//Listeners go here
document.addEventListener("DOMContentLoaded", initViz);

// Export PDF
const exportpdfbutton = document.getElementById("exportPDF");

function exportPDFfunction() {
  viz.showExportPDFDialog();
}

exportpdfbutton.addEventListener("click", exportPDFfunction);

// Export PowerPoint
const exportPPbutton = document.getElementById("exportPP");

function exportPPfunction() {
  viz.showExportPowerPointDialog();
}

exportPPbutton.addEventListener("click", exportPPfunction);

// Filter Function
document
  .getElementById("filterButton")
  .addEventListener("click", applyFilterFunction);

function applyFilterFunction() {
  console.log("hello my friends");
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheettofilter = sheets[0];
  sheettofilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz has been filtered bro"));
}
