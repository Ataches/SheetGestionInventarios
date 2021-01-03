function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Factura')
  .addItem('Crear nueva factura', 'newVariableSheet')
  .addItem('Ingresar Datos', 'dataInsertion')
  .addToUi();
}