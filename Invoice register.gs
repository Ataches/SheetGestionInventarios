
function onOpen() {

  var ui = invoice_ss.getUi();
  
  ui.createMenu('Factura')
  .addItem('Crear nueva factura', 'newVariableSheet')
  .addItem('Ingresar Datos', 'dataInsertion')
  .addToUi(); 
}

function saveDataInvoice(){
  invoice_data = invoice_register_sheet.getRange(13,1,invoice_register_sheet.getLastRow(),3).getValues();
  setDataInInvoice(invoice_data);
}
